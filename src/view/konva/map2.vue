<template>
  <div style="overflow: hidden;width: 100%;height: 300px;">
    <div id="content" :style="{background: '#ffe921', width: `${width}px`, height: `${height}px`}"></div>
  </div>
</template>

<script>
  import Konva from 'konva'
  const width = window.innerWidth;
  const height = window.innerHeight;
  export default {
    name: "map2",
    data() {
      return {
        stage: null,
        width: width,
        height: height
      }
    },
    methods: {
      init() {
        this.stage = new Konva.Stage({
          container: 'content',
          width: this.width,
          height: this.height,
          draggable: true,
        });
        let layer = new Konva.Layer();
        this.stage.add(layer);
        let rect1 = new Konva.Rect({
          x: 60,
          y: 60,
          width: 100,
          height: 90,
          fill: 'red',
          name: 'rect',
          draggable: true,
        });
        layer.add(rect1);
        let rect2 = new Konva.Rect({
          x: 250,
          y: 100,
          width: 150,
          height: 90,
          fill: 'green',
          name: 'rect',
          draggable: true,
        });
        layer.add(rect2);

        let tr = new Konva.Transformer();
        tr.
        layer.add(tr);
        // console.log(tr);
        // tr.nodes([rect1, rect2]);
        layer.draw();
        var selectionRectangle = new Konva.Rect({
          fill: 'rgba(0,0,255,0.5)',
        });
        layer.add(selectionRectangle);
        var x1, y1, x2, y2;
        this.stage.on('mousedown touchstart', (e) => {
          // do nothing if we mousedown on any shape
          if (e.target !== this.stage) {
            return;
          }

          x1 = this.stage.getPointerPosition().x;
          y1 = this.stage.getPointerPosition().y;
          x2 = this.stage.getPointerPosition().x;
          y2 = this.stage.getPointerPosition().y;

          console.log(this.stage.getPointerPosition());
          selectionRectangle.visible(true);
          selectionRectangle.width(0);
          selectionRectangle.height(0);
          layer.draw();
        });
      }
    },
    mounted() {
      this.init();
    }
  }
</script>

<style scoped>

</style>
