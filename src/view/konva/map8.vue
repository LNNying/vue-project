<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
  export default {
    name: "map8",
    data() {
      return {

      }
    },
    methods: {
      init() {

        var stage = new Konva.Stage({
          container: 'container',
          width: 1000,
          height: 1000
        });

        var layer = new Konva.Layer();

        let rect = new Konva.Rect({
          x: 0,
          y: 0,
          fill: '#76ff9d',
          width: 50,
          height: 50,
          draggable: true
        });
        layer.add(rect);
        rect.hide();
        rect.cache();

        let clone;
        for (let i = 0; i < 1000; i++) {
          clone = rect.clone({
            x: Math.random() * stage.width(),
            y: Math.random() * stage.width(),
            name: 'name' + i,
            show: true,
          });
          clone.cache();
          clone.show();
          layer.add(clone);
        }

        layer.draw();
        stage.add(layer);

        stage.on('mousedown', (e) => {
          console.log(e);
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
