<template>
  <div>
    <Button type="primary" @click="changeRouter">改变路径</Button>
    <Button type="primary" @click="hiddenRouter">隐藏</Button>
    <div id="container"></div>
  </div>
</template>

<script>
  export default {
    name: "map7",
    data() {
      return {
        clickArrow: null,
        layer: null
      }
    },
    methods: {
      init() {
        var stage = new Konva.Stage({
          container: 'container',
          width: 1000,
          height: 1000
        });
        this.layer = new Konva.Layer();
        var arrow = new Konva.Arrow({
          name: 'arrow',
          points: [427.81999999999994, 22.690000000000055, 427.81999999999994, 9.29000000000002, 454.82, 9.29000000000002, 454.82, 49.48999999999998, 441.32, 49.48999999999998, 441.32, 62.890000000000015],
          pointerLength: 10,
          pointerWidth: 10,
          fill: '#ff6d77',
          stroke: '#ff6d77',
          strokeWidth: 1
        });

        this.layer.add(arrow);
        this.layer.draw();
        stage.add(this.layer);
        stage.on('mousedown', (e) => {
          if (e.target.attrs.name) {
            this.clickArrow  = e.target.attrs;
          }
          console.log(e);
        });
      },
      changeRouter() {
        let path = [
          50, 50, 50, 100, 120, 100, 120, 300
        ];
        let arrow = this.layer.findOne('.arrow');
        // this.clickArrow.points = path;
        arrow.attrs.points = path;
        this.layer.draw();
      },
      hiddenRouter() {
        let path = [];
        let arrow = this.layer.findOne('.arrow');
        // this.clickArrow.points = path;
        arrow.hide();
        this.layer.draw();
      }
    },
    mounted() {
      this.init();
    }
  }
</script>

<style scoped>

</style>
