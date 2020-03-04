<template>
  <div>
   <!-- 用法：
    <v-stage>
      <v-layer>
        图形样式
      </v-layer>
    </v-stage>
    图形方式包括：v-rect, v-circle, v-ellipse, v-line, v-image, v-text, v-text-path, v-star, v-label, v-path, v-regular-polygon
    vue中使用：
    npm install vue-konva konva --save

    import VueKonva from 'vue-konva'

    Vue.use(VueKonva)
    Vue使用网址：https://konvajs.org/docs/vue/index.html
    -->
    <v-stage :config="configKonva">
      <v-layer>
        <v-rect :config="configCircle"></v-rect>
      </v-layer>
    </v-stage>
    <!--<v-stage-->
      <!--ref="stage"-->
      <!--:config="configKonva"-->
      <!--@dragstart="handleDragstart"-->
      <!--@dragend="handleDragend"-->
      <!--@click="handleClick"-->
    <!--&gt;-->
      <!--<v-layer ref="layer">-->
        <!--<v-star-->
          <!--v-for="item in list"-->
          <!--:key="item.id"-->
          <!--:config="{-->
            <!--x: item.x,-->
            <!--y: item.y,-->
            <!--rotation: item.rotation,-->
            <!--id: item.id,-->
            <!--numPoints: 5,-->
            <!--innerRadius: 30,-->
            <!--outerRadius: 50, fill: '#89b717',-->
            <!--opacity: 0.8,-->
            <!--draggable: true,-->
            <!--scaleX: dragItemId === item.id ? item.scale * 1.2 : item.scale,-->
            <!--scaleY: dragItemId === item.id ? item.scale * 1.2 : item.scale,-->
            <!--shadowColor: 'black',-->
            <!--shadowBlur: 10,-->
            <!--shadowOffsetX: dragItemId === item.id ? 15 : 5,-->
            <!--shadowOffsetY: dragItemId === item.id ? 15 : 5,-->
            <!--shadowOpacity: 0.6-->
          <!--}"-->
        <!--&gt;</v-star>-->
      <!--</v-layer>-->
    <!--</v-stage>-->
  </div>
</template>

<script>
const width = window.innerWidth
const height = window.innerHeight
export default {
  name: 'testMap',
  data () {
    return {
      list: [],
      dragItemId: null,
      configKonva: {
        width: width,
        height: height
      },
      configCircle: {
        x: 100,
        y: 100,
        width: 100, // 矩形的宽度

        height: 100, // 矩形高度
        // radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
      }
    }
  },
  methods: {
    handleDragstart (e) {
      // save drag element:
      this.dragItemId = e.target.id()
      // move current element to the top:
      const item = this.list.find(i => i.id === this.dragItemId)
      const index = this.list.indexOf(item)
      this.list.splice(index, 1)
      this.list.push(item)
    },
    handleDragend (e) {
      this.dragItemId = null
    },
    handleClick (e) {
      console.log(e)
    }
  },
  mounted () {
    for (let n = 0; n < 30; n++) {
      this.list.push({
        id: Math.round(Math.random() * 10000).toString(),
        x: Math.random() * width,
        y: Math.random() * height,
        rotation: Math.random() * 180,
        scale: Math.random()
      })
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>
