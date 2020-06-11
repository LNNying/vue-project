<template>
  <div ref="dom" style="width: 1000px; height: 600px;"></div>
</template>

<script>
  import echarts from 'echarts'
  import { on, off } from '@/libs/tools'
    export default {
        name: "echartMap",
      data () {
        return {
          dom: null
        }
      },
      methods: {
        resize () {
          this.dom.resize()
        }
      },
      mounted () {
        const option = {
          title : {
            text : '类目坐标散点图',
          },
          tooltip : {
            trigger: 'axis',
            axisPointer:{
              show: true,
              type : 'cross',
              lineStyle: {
                type : 'square',
                width : 1
              }
            }
          },
          toolbox: {
            show : true,
            feature : {
              // mark : {show: true},
              // dataView : {show: true, readOnly: false},
              // restore : {show: true},
              // saveAsImage : {show: true}
            }
          },
          dataZoom: [
            {
              type: 'slider',
              show: true,
              start: 0,
              end: 100,
              height: 16
              // handleSize: 8
            },
            {
              type: 'inside',
              start: 94,
              end: 100
            },
            {
              type: 'slider',
              show: true,
              yAxisIndex: 0,
              filterMode: 'empty',
              width: 16,
              height: '80%',
              left: '93%'
            }
          ],
          legend : {
            data : ['series1', 'series2']
          },
          dataRange: {
            min: 0,
            max: 100,
            y: 'center',
            text:['高','低'],           // 文本，默认为数值文本
            color:['lightgreen','red'],
            calculable : true
          },
          xAxis : [
            {
              type : 'category',
              axisLabel: {
                formatter : function(v) {
                  return '类目' + v
                }
              },
              data : function (){
                let list = [];
                let len = 0;
                while (len++ < 100) {
                  list.push(len);
                }
                return list;
              }()
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          animation: false,
          series : [
            {
              name:'series1',
              type:'scatter',
              symbol: 'rect',
              tooltip : {
                trigger: 'item',
                formatter : function (params) {
                  return params.seriesName + ' （'  + '类目' + params.value[0] + '）<br/>'
                    + params.value[1] + ', '
                    + params.value[2];
                },
                axisPointer:{
                  show: true
                }
              },
              symbolSize: 12,
              data: (function () {
                let d = [];
                let len = 50;
                let value;
                while (len++ < 50) {
                  d.push([
                    len,
                    (Math.random()*100).toFixed(0)
                  ]);
                }
                return d;
              })()
            },
            {
              name:'series2',
              type:'scatter',
              symbol: 'rect',
              tooltip : {
                trigger: 'item',
                formatter : function (params) {
                  return params.seriesName + ' （'  + '类目' + params.value[0] + '）<br/>'
                    + params.value[1] + ', '
                    + params.value[2];
                },
                axisPointer:{
                  show: true
                }
              },
              symbolSize: 12,
              data: (function () {
                let d = [];
                let len = 50;
                let value;
                while (len++ < 100) {
                  d.push([
                    len,
                    (Math.random()*100).toFixed(0)
                  ]);
                }
                return d;
              })()
            }
          ]
        };

        this.$nextTick(() => {
          this.dom = echarts.init(this.$refs.dom)
          this.dom.setOption(option)
          this.dom.on('click', function (params) {
            console.log(params);
          });
          on(window, 'resize', this.resize)
        })

      },
      beforeDestroy () {
        off(window, 'resize', this.resize)
      }
    }
</script>

<style scoped>

</style>
