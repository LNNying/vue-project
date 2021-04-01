<template>
  <div>
    <div id="content"></div>
  </div>
</template>

<script>
  const width = window.innerWidth;
  const height = window.innerHeight;
  import Konva from 'konva'
  export default {
    name: "map3",
    data() {
      return {
        stage: null
      }
    },
    methods: {
      init() {
        this.stage = new Konva.Stage({
          container: 'content',
          width: width,
          height: height,
          dragBoundFunc: function(pos) {
            return {
              x: this.absolutePosition().x,
              y: pos.y
            };
          }
        });
        let layer = new Konva.Layer();

        let circle = new Konva.Circle({
          x: width / 2,
          y: height / 2,
          radius: 50,
          fill: '#a5ffb2',
          stroke: '#fff',
        });

        let content = this.stage.container();

        content.tabIndex = 1;

        content.focus();
        const  STEP = 4;
        content.addEventListener('keydown', (e) => {
          if (e.keyCode === 37) {
            if (circle.x() <= 52) {
              return
            }
            circle.x(circle.x() - STEP);
          } else if (e.keyCode === 38) {
            if (circle.y() <= 52) {
              return
            }
            circle.y(circle.y() - STEP);
          } else if (e.keyCode === 39) {
            if (circle.x() >= width - 52) {
              return
            }
            circle.x(circle.x() + STEP);
          } else if (e.keyCode === 40) {
            if (circle.y() >= height - 52) {
              return
            }
            circle.y(circle.y() + STEP);
          } else {
            return;
          }
          e.preventDefault();
          layer.batchDraw();
        });
        layer.add(circle);
        layer.draw();
        this.stage.add(layer)
      }
    },
    mounted() {
      this.init();
    }
  }
</script>

<style scoped>

</style>
