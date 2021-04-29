<template>
  <div style="position: relative;">
    <Button type="primary" @click="xaun">框选</Button>
    <Button type="primary" @click="cancelXuan">取消框选</Button>
    <Button type="primary" @click="translate">旋转</Button>
    <Button type="primary" @click="deleteItem">删除</Button>
    <v-stage
      v-if="xuan"
      ref="stage"
      @mousedown="down"
      @mouseup="up"
      @mousemove="move"
      :config="configStage1"
      style="position:absolute;z-index: 100">
      <v-layer>
        <v-rect
          ref="rect"
          :config="{
            x: rectObj.x,
            y: rectObj.y,
            width: rectObj.w,
            height: rectObj.h,
            fill: 'red',
            stroke: 'red',
      }"></v-rect>

        <v-rect
          ref="rect"
          :config="{
            x: rect.x,
            y: rect.y,
            width: rect.w,
            height: rect.h,
            stroke: 'red',
      }">

        </v-rect>
      </v-layer>
    </v-stage>
    <v-stage
      ref="stage"
      :config="configStage"
      @click="clickNode"
      @dragstart="dragStarted"
      @dragend="dragEnd"
      style="background: #bff2f5;position:absolute;z-index: 1">
      <v-layer>
        <v-rect
          v-for="(item, index) in rectList" :key="index"
          :config="{
                x: item.x,
                y: item.y,
                id: item.id,
                width: interval,
                height: interval,
                fill: 'blue',
                stroke: '#fff',
      }">
        </v-rect>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
  export default {
    name: "map4",
    data() {
      return {
        rectList: [],
        interval: 15,
        xuan: false,
        currentObj: {
          x: null,
          y: null,
          w: null,
          h: null,
          endX: null,
          endY: null
        },
        rect: {
          x: null,
          y: null,
          w: null,
          h: null
        },
        rectObj: {
          x: null,
          y: null,
          w: null,
          h: null
        },
        show: false
      }
    },
    computed: {
      configStage1() {
        return {
          width: 1000,
          height: 800,
          // draggable: true,
          /**
           *  90 => y 400
           *  180 => x , y 400
           *  270 => x 400
           */
        }
      },
      configStage() {
        return {
          width: 1000,
          height: 800,
          // draggable: true,
          /**
           *  90 => y 400
           *  180 => x , y 400
           *  270 => x 400
           */
          rotation: 90,
          offset: {
            y: 500,
            x: 400
          }
        }
      }
    },
    methods: {
      deleteItem() {

      },
      up(e) {
        this.show = false;
        this.currentObj.endX = e.evt.offsetX;
        this.currentObj.endY = e.evt.offsetY;
        this.rectObj.x = this.currentObj.x;
        this.rectObj.y = this.currentObj.y;
        this.rectObj.w = this.currentObj.w;
        this.rectObj.h = this.currentObj.h;
        console.log(this.currentObj);
      },
      down(e) {
        this.show = true;
        this.currentObj.x = e.evt.offsetX;
        this.currentObj.y = e.evt.offsetY;
      },
      move(e) {
        if (!this.show) {
          return
        }
        this.currentObj.w = e.evt.offsetX - this.currentObj.x;
        this.currentObj.h = e.evt.offsetY - this.currentObj.y;
        this.rect.x = this.currentObj.x;
        this.rect.y = this.currentObj.y;
        this.rect.w = this.currentObj.w;
        this.rect.h = this.currentObj.h;
      },
      dragStarted(e) {
      },
      dragEnd(e) {
        let body = e.target.attrs;
        let [offsetX, offsetY] = [e.evt.offsetX, e.evt.offsetY];
        for (let i = 0, len = this.rectList.length; i < len; i++) {
          if (body.id === this.rectList[i].id) {
            this.rectList[i].x = body.x;
            this.rectList[i].y = body.y;
            // console.log(this.rectList[i]);
          }
        }
        // console.log('----------end-----------');
        // console.log(e);
      },
      clickNode(e) {
        console.log(e);
        let body = e.target.attrs;
        // console.log(body);
        if (!!body && body.id) {
          // this.msg = 'x=> ' + body.x + 'y=> ' + body.y;
        }
      },
      xaun() {
        this.xuan = true;
      },
      cancelXuan(){
        this.xuan = false;
      },
      translate() {

      },
      init() {
        this.$nextTick(() => {
          for (let i = 0; i < 55; i++) {
            for (let j = 0; j < 55; j++) {
              let id = (i + '-' + j);
              this.rectList.push({
                id: (i + '-' + j),
                x: j * 15,
                y: i * 15
              })
            }
          }
        })
      }
    },
    mounted() {
      this.init();
    }
  }
</script>

<style scoped>

</style>
