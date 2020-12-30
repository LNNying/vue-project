<template>
  <div ref="platform" style="width: 100%;height: 500px;"></div>
</template>

<script>
  import echarts from 'echarts';
  import 'echarts/map/js/china.js';
  import city from 'echarts/map/json/china-cities'
  import img from '../../assets/images/logo-min.jpg'

  export default {
    name: "china",
    data() {
      return {
        mapData: [
          {name: "石家庄", number: 102, count: 2457, good: 2313, bad: 144},
          {name: "秦皇岛", number: 169, count: 1931, good: 1869, bad: 62},
          // {name: "唐山", number: 164, count: 1291, good: 1200, bad: 91},
          // {name: "保定", number: 157, count: 2142, good: 2098, bad: 44},
          // {name: "太原", number: 256, count: 2331, good: 2070, bad: 261},
          // {name: "泰安", number: 128, count: 2699, good: 2556, bad: 143},
          // {name: "阳泉", number: 136, count: 1277, good: 1051, bad: 226},
          // {name: "呼和浩特", number: 138, count: 2108, good: 2085, bad: 23},
          // {name: "韶关", number: 266, count: 2734, good: 2609, bad: 125},
          // {name: "长沙", number: 133, count: 2938, good: 2746, bad: 192},
          // {name: "郴州", number: 252, count: 1604, good: 1306, bad: 298},
          // {name: "娄底", number: 270, count: 2885, good: 2639, bad: 246},
          // {name: "武汉", number: 211, count: 1121, good: 964, bad: 157},
          // {name: "黄石", number: 120, count: 2534, good: 2432, bad: 102},
          // {name: "十堰", number: 125, count: 1581, good: 1540, bad: 41},
          // {name: "荆州", number: 186, count: 2926, good: 2730, bad: 196},
          {name: "青海", number: 121, count: 1787, good: 1662, bad: 125}
        ],
        myCity: [
          {
            properties: {
              cp: [101.77, 36.62],
              name: '青海'
            },
          }
        ],
        img: img
      }
    },
    methods: {
      chinaConfigure() {
        let _this = this
        let myChart = echarts.init(this.$refs.platform);
        let geoCoordMap = {};
        let mapName = 'china';
        myChart.showLoading();
        let mapFeatures = city.features;
        mapFeatures = mapFeatures.concat(this.myCity)
        // 在这里加入自己想要的城市
        myChart.hideLoading();
        mapFeatures.forEach(function (v) { // 地区名称
          let name = v.properties.name; // 地区经纬度
          geoCoordMap[name] = v.properties.cp;
        });
        let data = [];
        data = this.mapData;
        let max = 480, min = 9; // todo
        let maxSize4Pin = 100, minSize4Pin = 20;
        let convertData = function (data) {
          let res = [];
          for (let i = 0; i < data.length; i++) {
            let geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                count: data[i].count,
                value: geoCoord.concat(data[i].value),
              });
            }
          }
          return res;
        };
        window.onresize = myChart.resize;
        myChart.setOption({ // 进行相关配置
          backgroundColor: "transparent",
          tooltip: {
            trigger: "item",
            backgroundColor: "#4d62c8",
            borderColor: "#FFFFCC",
            showDelay: 0,
            hideDelay: 0,
            enterable: false,
            transitionDuration: 0,
            extraCssText: "z-index:100",
            formatter: function (params, ticket, callback) {
              // if (ticket.indexOf('散点') != -1) {
              let index = params.dataIndex
              let name = params.name
              let tipHtml = '';
              tipHtml =
                '<div style="width:280px;height:200px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">' +
                '<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 20px">' +
                '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;">' +
                '</i>' + '<span style="margin-left:10px;color:#fff;font-size:16px;">' + name + '</span>' +
                '</div>' + '<div style="padding:20px">' + '<p style="color:#fff;font-size:12px;">' +
                '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
                '</i>' + '机器总数：' + '<span style="color:#f48225;margin:0 6px;">' + _this.mapData[index].count +
                '</span>' +
                '个' + '</p>' + '<p style="color:#fff;font-size:12px;">' +
                '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
                '</i>' + '正常运行机器数：' + '<span style="color:#f48225;margin:0 6px;">' + _this.mapData[index].good +
                '</span>' +
                '个' + '</p>' + '<p style="color:#fff;font-size:12px;">' +
                '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
                '</i>' + '待修机器数：' + '<span style="color:#f48225;margin:0 6px;">' + _this.mapData[index].bad +
                '</span>' +
                '个' + '</p>' + '</div>' + '</div>';
              return tipHtml;
              // }
            }
          },
          visualMap: {
            show: false,
            min: 0,
            max: 200,
            left: '10%',
            top: 'bottom',
            calculable: false,
            seriesIndex: [1],
            inRange: {
              color: ['#04387b', '#467bc0']
            }
          },
          geo: {
            map: mapName,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              },
              color: '#fff'
            },
            roam: true,
            zoom: .6,
            scaleLimit: { //所属组件的z分层，z值小的图形会被z值大的图形覆盖
              min: .6, //最小的缩放值
            },
            layoutCenter: ["50%", "50%"], //地图位置
            layoutSize: "180%",
            itemStyle: {
              normal: {
                areaColor: '#0083ce', //地图颜色
                borderColor: '#fff' //省份边界颜色
              },
              emphasis: {
                borderColor: '#0066ba', //选中省份边界颜色
                areaColor: "#0494e1", //选中省份颜色
                shadowColor: 'rgba(0, 0, 0, 0.4)', //选中省份投影
                shadowBlur: 10
              }
            }
          },
          series: [
            // {
            //   name: '散点',
            //   type: 'effectScatter',
            //   coordinateSystem: 'geo',
            //   data: convertData(this.mapData),
            //   rippleEffect: {
            //     //涟漪特效
            //     period: 1, //动画时间，值越小速度越快
            //     brushType: "fill", //波纹绘制方式 stroke, fill
            //     scale: 1 //波纹圆环最大限制，值越大波纹越大
            //   },
            //   hoverAnimation: true,
            //   symbol: 'path://"M196.608 348.16h206.336l65.024 120.832 62.464 75.776L660.992 348.16H890.88l69.632 198.656-30.72 106.496-39.936-1.024 10.752-90.624-26.112-68.608-5.12 158.208-32.768 299.52H783.36l-3.584-274.432h-30.208l-50.688 275.968h-59.392l18.432-301.568V501.76l-131.584 112.64-102.912-73.216-3.584 110.08-34.816 301.568H325.12v-275.968h-30.208L240.64 950.784H187.392l20.48-299.52-5.12-137.216-77.312 93.184v40.448h25.088v207.872H69.632v-207.872h25.088v-41.984l-17.92-7.68L196.608 348.16z m607.744-225.28c-47.104-28.672-108.544-13.312-137.216 33.792-28.672 47.104-13.312 108.544 33.792 137.216s108.544 13.312 137.216-33.792c28.672-47.104 13.312-108.544-33.792-137.216zM256 122.88c47.104-28.672 108.544-13.312 137.216 33.792 28.672 47.104 13.312 108.544-33.792 137.216S250.88 307.2 222.208 260.096C194.048 212.992 208.896 151.552 256 122.88z',
            //   showAllSymbol: true,
            //   symbolSize: 30,
            //   label: {
            //     normal: {
            //       formatter: '{b}',
            //       position: 'right',
            //       show: false
            //     },
            //     emphasis: {
            //       show: false
            //     }
            //   },
            //   itemStyle: {
            //     normal: {
            //       color: '#fff'
            //     }
            //   }
            // },
            {
              name: '散点',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: convertData(this.mapData.sort(function (a, b) {
                return b.count - a.count;
              })), // 波纹 显示几个
              // 自定义标识  用svg图片
              symbol: 'path://"M1018.24 843.264c0 0.032 0.016 0.064 0.016 0.096 0 17.328-14.096 31.376-31.504 31.376H752.08c17.6-3.856 30.768-19.44 30.768-38.144v-0.096h0.016s0-142.576-104.496-194.4c-44.688-22.16-47.648-17.936-69.84-23.184l0.624-61.76s-24.384-18.576-31.968-76.928c-15.28 4.4-20.32-17.856-21.2-32.016-0.848-13.696-8.848-56.464 9.76-52.624-3.808-28.544-6.56-54.304-5.2-67.952 4.672-47.888 50.96-97.92 122.24-101.568 83.856 3.648 117.072 53.664 121.744 101.52 1.328 13.664-1.648 39.424-5.456 67.936 18.64-3.792 10.544 38.896 9.632 52.592-0.832 14.192-6 36.352-21.216 31.984-7.632 58.304-32 76.752-32 76.752l0.56 61.68s15.44 8.784 80.576 35.68c65.152 26.912 44.72 6.784 97.776 33.072 83.872 41.616 83.872 155.984 83.872 155.984h-0.032zM545.664 632.32c71.632 29.616 49.152 7.456 107.488 36.384 92.192 45.712 92.192 171.44 92.192 171.44h-0.016c0 0.048 0.016 0.064 0.016 0.096 0 19.056-15.52 34.496-34.64 34.496H41.376c-19.12 0-34.624-15.44-34.624-34.496v-0.096h-0.016s0-125.712 92.192-171.456c58.336-28.928 35.872-5.456 107.488-35.04 71.6-29.552 88.576-39.872 88.576-39.872l0.672-68.128s-26.816-20.448-35.136-84.56c-16.768 4.832-22.336-19.632-23.328-35.216-0.912-15.04-9.696-62.064 10.768-57.824-4.192-31.392-7.2-59.696-5.728-74.672 5.152-52.656 56-107.664 134.368-111.664 92.176 4 128.672 58.976 133.792 111.584 1.504 15.008-1.792 43.328-5.984 74.672 20.48-4.192 11.584 42.752 10.576 57.808-0.896 15.584-6.576 39.968-23.312 35.136-8.368 64.112-35.2 84.4-35.2 84.4l0.64 67.792s16.96 9.648 88.544 39.216"',
              showAllSymbol: true,
              symbolSize: 20, // 波纹大小
              showEffectOn: 'render',
              rippleEffect: {
                //涟漪特效
                period: 1, //动画时间，值越小速度越快
                brushType: "fill", //波纹绘制方式 stroke, fill
                scale: 1 //波纹圆环最大限制，值越大波纹越大
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                }
              },
              itemStyle: { // 改变图标颜色以及阴影
                normal: {
                  color: '#b5ffc2',
                  shadowBlur: 10,
                  shadowColor: 'yellow'
                }
              },
              zlevel: 1
            }]
        });
        myChart.on('click', function (params) {
          console.log(params);
        });
      }
    },
    mounted() {
      this.chinaConfigure()
    }
  }
</script>

<style scoped>

</style>
