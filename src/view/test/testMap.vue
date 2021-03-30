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
    <!--<v-stage :config="configKonva">-->
    <!--<v-layer>-->
    <!--<v-rect :config="configCircle"></v-rect>-->
    <!--</v-layer>-->
    <!--</v-stage>-->
    <v-stage
      ref="stage"
      :config="configKonva"
      style="border: 1px solid red;"
      @dragstart="handleDragstart"
      @dragend="handleDragend"
      @click="handleClick"
      @wheel="roll"
    >
      <v-layer ref="layer">
        <v-star
          v-for="item in list"
          :key="item.id"
          :config="{
            x: item.x,
            y: item.y,
            id: item.id,
            numPoints: 5,
            innerRadius: 30,
            outerRadius: 50, fill: '#89b717'
          }"
        ></v-star>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
// let scale = 1
// const width = window.innerWidth
// const height = window.innerHeight
export default {
  name: 'testMap',
  data () {
    return {
      list: [],
      dragItemId: null,
      configKonva: {
        width: 2000,
        height: 4000,
        draggable: true
      },
      width: window.innerWidth,
      height: window.innerHeight,
      scale: 1,
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
    },
    roll (e) {
      console.log(e)
      if (event.wheelDelta > 0) {
        if (this.scale > 30) {
          return
        }
        this.scale += 9
      } else {
        if (this.scale <= 15) {
          this.scale = 15
          return
        }
        this.scale -= 9
      }
      this.buildMap()
      console.log(this.scale)
    },
    buildMap () {
      this.list = []
      for (let n = 0; n < 3000; n++) {
        this.list.push({
          id: Math.round(Math.random() * 10000).toString(),
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          rotation: Math.random() * 180,
          scale: Math.random()
        })
      }
    }
  },
  mounted () {
    this.buildMap()
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>
