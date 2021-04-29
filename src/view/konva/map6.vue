<template>
<div>
  <Button type="primary" @click="deleteItem">删除</Button>
  <div id="container"></div>
</div>
</template>

<script>
  var width = window.innerWidth;
  var height = window.innerHeight;
  export default {
    name: "map6",
    data() {
      return {
        clickNode: null,
        layer: null
      }
    },
    methods: {
      deleteItem() {
        console.log(this.clickNode);
        this.clickNode.destroy();
        this.layer.draw();
      },
      init() {
        var stage = new Konva.Stage({
          container: 'container',
          width: 2000,
          height: 2000
        });

        this.layer = new Konva.Layer();
        var rect1 = new Konva.Rect({
          x: 20,
          y: 20,
          width: 100,
          height: 50,
          fill: 'green',
          stroke: 'black',
          strokeWidth: 4
        });
        var rect2 = new Konva.Rect({
          x: 50,
          y: 80,
          width: 100,
          height: 50,
          fill: 'green',
          stroke: 'black',
          strokeWidth: 4
        });
        this.layer.add(rect2);
        this.layer.add(rect1);
        this.layer.draw();
        stage.add(this.layer);
        let _this = this;
        stage.on('mousedown', (e) => {
          _this.clickNode = e.target;
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
