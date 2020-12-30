<template>
  <div ref="mapBox" style="width: 100%;height: 500px;"></div>
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
        chart: null,
        options: {},
      }
    },
    created () {
      this.options = {
        title: {
          text: '各区域摄像头分布情况',
          subtext: '',
          padding: [15, 15],
          textStyle: {
            fontFamily: '宋体',
            fontSize: 16,
            fontWeight: 'normal',
            color: '#fff'
          }
        },
        geo: {
          map: 'china',
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
          {
            map: '福州',
            type: 'map',
            coordinateSystem: 'geo',
            aspectScale: 0.9,
            roam: false,

            label: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 12,
              }
            },

            itemStyle: {
              normal: {
                borderColor: '#0AAEB0', // 图形的描边颜色 #0AAEB0
                borderWidth: 1, // 描边线宽。
                borderType: 'solid', // 柱条的描边类型。
                areaColor: '#233F53', // 图形的颜色 #233F53
                shadowBlur: 5, // 图形阴影的模糊大小。
                shadowColor: '#233F53', // 阴影色 #233F53
                shadowOffsetX: 5, // X轴阴影
                shadowOffsetY: 5, // Y轴阴影

                label: {
                  show: false, // 显示区域名称
                  textStyle: {
                    color: '#fff',
                    fontSize: 12,
                  },
                }
              },
              // 鼠标移入时
              emphasis: {
                borderColor: '#2378f7',  // 图形的描边颜色 #2378f7
                borderWidth: '1',
                areaColor: '#233F53', // 阴影色 #233F53
                label: {
                  show: false,
                  textStyle: {
                    color: '#fff',
                    fontSize: 14,
                  }
                }
              },

              effect: {
                show: true,
                shadowBlur: 10,
                loop: true,
              }
            },

            markPoint: {
              symbol: 'image://' + require('../../assets/images/logo-min.jpg'),// 自定义图片路径
              symbolSize: [28, 49], // 图片大小
              label: {
                position: 'top',
                color: '#fff'
              },
              // coord数组存放地址坐标
              data: [
                { name: '北京', coord: [116.405285, 39.904989], value: '78' },
                // { name: '仓山区', coord: [119.254358, 26.044616], value: '92' },
                // { name: '晋安区', coord: [119.332546, 26.089014], value: '21' },
                // { name: '连江县', coord: [119.572573, 26.201361], value: '37' },
                // { name: '长乐区', coord: [119.533479, 25.968762], value: '50' },
              ]
            }
          }
        ]
      };
    },
    mounted() {
      this.chart = echarts.init(this.$refs.mapBox)
      this.chart.setOption(this.options)
    }
  }
</script>

<style scoped>

</style>
