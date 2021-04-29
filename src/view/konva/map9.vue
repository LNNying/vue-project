<template>
  <div>
    setZIndex 接收正负值
    <Button type="primary" @click="setZIndexFun">设置ZIndex</Button>
    <div id="container"></div>
  </div>
</template>

<script>
  export default {
    name: "map9",
    data() {
      return {
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
        var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
        for (let i = 0; i < 6; i++) {
          var box = new Konva.Rect({
            x: i * 30 + 210,
            y: i * 18 + 40,
            width: 100,
            height: 50,
            fill: colors[i],
            stroke: 'black',
            strokeWidth: 4,
            draggable: true,
            name: colors[i]
          });
          this.layer.add(box);
        }
        stage.add(this.layer);
      },
      setZIndexFun() {
        let box = this.layer.findOne('.yellow');
        box.setZIndex(0);
        this.layer.draw();
      }
    },
    mounted() {
      this.init()
    }
  }
</script>

<style scoped>

</style>
