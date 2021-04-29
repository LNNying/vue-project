<template>

  <div>
    <Button type="success" @click="rotatRect">选择 {{rotation}}</Button>
    <div class="map5" id="map5"></div>
  </div>
</template>

<script>
  import Konva from 'konva'
  export default {
    name: "map5",
    data() {
      return {
        stage: null,
        layer: null,
        rectList: [],
        rotation: 0,
        rect: null
      }
    },
    methods: {
      rotatRect() {
        if (this.rotation === 270) {
          this.rotation = 0;
          return
        }
        this.rotation += 90;
        this.layer.rotate(this.rotation / 10);
        // 重新绘制
        this.stage.draw();
      },
      init2() {
        this.stage = new Konva.Stage({
          container: 'map5',
          width: window.innerWidth,
          height: window.innerHeight,
          draggable: true,
        });
        this.layer = new Konva.Layer();
        this.stage.add(this.layer);

        this.rect = new Konva.Rect({
          x: 20,
          y: 20,
          width: 200,
          height: 300,
          fill: 'red',
          stroke: 'red',
          shadowColor: '#0913ff',
          strokeWidth: 4,
          shadowOffsetX : 0,
          shadowOffsetY : 0,
          shadowBlur : 40,
        });

        let rects = new Konva.Rect({
          x: 70,
          y: 120,
          width: 100,
          height: 100,
          fill: 'orange',
          stroke: 'orange',
          shadowColor: '#0913ff',
          strokeWidth: 4,
          shadowOffsetX : 0,
          shadowOffsetY : 0,
          shadowBlur : 40,
        })

        this.layer.add(this.rect);
        this.layer.add(rects);
        this.layer.draw();

      },
      init() {
        this.stage = new Konva.Stage({
          container: 'map5',
          width: window.innerWidth,
          height: window.innerHeight,
          draggable: true,
        });
        this.layer = new Konva.Layer();
        this.stage.add(this.layer);

        for (let i = 0; i < 10; i++) {
          let rect = new Konva.Rect({
            x: Math.random() * 10 * 15,
            y: Math.random() * 10 * 15,
            width: 15,
            height: 15,
            fill: 'red',
            name: 'class' + i,
            stroke: '#eee'
          });
          this.layer.add(rect);
          this.rectList.push(rect);
        }
        // 单个rect 隐藏
        console.log(this.stage.find('.class1')[0].hide());
        // 获取单个rect x 位置
        console.log(this.rectList[0].x());
        console.log(this.layer);
        this.layer.draw();
        this.createAnim();
      },
      createAnim() {
        // let x = 0;
        // let _this = this;
        // let anim = new Konva.Animation(function(frame) {
        //   for (let i = 0; i < _this.rectList.length; i++) {
        //     let x = Math.random() * 100;
        //     let y = Math.random() * 100;
        //     _this.rectList[i].x(x);
        //     _this.rectList[i].y(y);
        //   }
        // }, this.layer);
        // anim.start();
      }
    },
    mounted() {
      this.init2();
    }
  }
</script>

<style scoped>
  .map5 {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
