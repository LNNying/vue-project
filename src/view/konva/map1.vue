<template>
<div>
  <Button type="warning">234234</Button>
  <Button type="success">234234</Button>
  <Button type="primary" @click="translate">旋转</Button>
  <Button type="primary" @click="deleteItem">删除</Button>
  <p>{{msg}}</p>
  <v-stage
    ref="stage"
  :config="configStage"
  @click="clickNode"
  @dragstart="dragStarted"
  @dragend="dragEnd"
  style="background: #bff2f5;">
    <v-layer>
      <v-rect
      v-for="(item, index) in rectList" :key="index"
      :config="{
      x: item.x,
      y: item.y,
      id: item.id,
      width: interval,
      height: interval,
      fill: 'red',
      stroke: '#fff',
                draggable: true,
      }">
      </v-rect>
      <v-rect
      ref="rect"
      :config="{
      x: 20,
      y: 40,
      width: 20,
      height: 20,
      fill: 'blue'
      }">

      </v-rect>
    </v-layer>
  </v-stage>

  <div class="out">
    <div class="top">
      <img src="../../assets/svg/jia.svg" style="transform: rotateZ(45deg);width: 15px;height: 15px;margin-top: 10px;margin-left: 10px"/>
    </div>
    <div class="left">
      <img src="../../assets/svg/zhuan.svg" style="transform: rotateZ(-180deg) rotateX(180deg);width: 15px;height: 15px;margin-top: 9px;margin-left: 9px"/>
    </div>
    <div class="center">90</div>
    <div class="right">
      <img src="../../assets/svg/zhuan.svg" style="transform: rotateZ(0deg);width: 15px;height: 15px;margin-top: 10px;margin-left: 10px"/>
    </div>
    <div class="bottom">
      <img src="../../assets/svg/jian.svg" style="transform: rotateZ(45deg);width: 15px;height: 15px;margin-top: 10px;margin-left: 10px"/>
    </div>
  </div>
<div style="position: relative">
  <div class="lnn-operate">
    <div class="flex-center">
      <Button size="small"><Icon type="md-help" /></Button>
    </div>
    <div style="margin-top: 5px; text-align: center" class="flex-center">
      <Poptip class="margin-top-10" trigger="hover" content="地图旋转" placement="top">
        <Button size="small"><Icon type="md-refresh" /></Button>
      </Poptip>
    </div>
    <div style="margin-top: 5px;">
      <div class="flex-center lnn-icon">
        <Icon type="md-add"/>
      </div>
      <div style="height: 100px;" class="flex-center">
        <Progress :percent="45" status="active" vertical hide-info/>
      </div>
      <div class="flex-center lnn-icon">
        <Icon type="md-remove" />
      </div>
    </div>
  </div>
  <div class="lnn-operate-info">
    <Button title="编辑" size="small">
      <i class="el-icon-edit-outline"></i>
    </Button>
    <Button title="拖放" size="small" style="margin-left: 5px">
      <Icon type="ios-hand-outline" />
    </Button>
    <Button title="删除" size="small" style="margin-left: 5px">
      <i class="el-icon-delete"/>
    </Button>
    <Button title="关闭" size="small" style="margin-left: 20px">
      <i class="el-icon-close"/>
    </Button>
  </div>
</div>
</div>
</template>

<script>
  export default {
    name: "map1",
    data() {
      return {
        rectList: [],
        clickRct: null,
        interval: 15,
        msg: '',
        tipMsg: '鼠标左键:点击拖拽;鼠标右键:框选.',
      }
    },
    computed: {
      configStage() {
        return {
          width: 800,
          height: 400,
          draggable: true,
          /**
           *  90 => y 400
           *  180 => x , y 400
           *  270 => x 400
           */
          rotation: 0,
          offset: {
            y: 0,
            x: 0
          }
        }
      }
    },
    methods: {
      deleteItem() {
        if (!this.clickRct) {
          return
        }
        this.clickRct.destroy();

      },
      up() {
      },
      down() {
      },
      dragStarted(e) {},
      dragEnd(e) {
        let body = e.target.attrs;
        let [offsetX, offsetY] = [e.evt.offsetX, e.evt.offsetY];
        for (let i = 0, len = this.rectList.length; i < len; i++) {
          if (body.id === this.rectList[i].id) {
            this.rectList[i].x = body.x;
            this.rectList[i].y = body.y;
            console.log(this.rectList[i]);
          }
        }
        console.log('----------end-----------');
        console.log(e);
      },
      clickNode(e) {
        console.log(e);
        let body = e.target.attrs;
        this.clickRct = e.target;
        console.log(body);
        if (!!body && body.id) {
          this.msg = 'x=> ' + body.x + 'y=> ' + body.y ;
        }
      },
      translate() {

      },
      init() {
        this.$nextTick(() => {
          for (let i = 0; i < 25; i++) {
            for (let j = 0; j < 25; j++) {
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
      // console.log(this.$refs['stage'].getNode().getStage().attrs.x);
      console.log(this.$refs['rect'].getNode());
      this.init();
      // console.log(this.rectList);
    }
    /**
     * 天津中
     *
     import bot from '../../../../assets/svg/jian.svg';
     import botDis from '../../../../assets/svg/jian-dis.svg';
     import top from '../../../../assets/svg/jia.svg';
     import topDis from '../../../../assets/svg/jia-dis.svg';
     import zhuan from '../../../../assets/svg/zhuan.svg'
     import zhuanDis from '../../../../assets/svg/zhuan-dis.svg'

     <div class="out">
     <div :class="{top: true, topHover: scale >= 1.3 ? false : true}" @click="setScale('0')">
     <img :src="scale >= 1.3 ? iconList.topSrc[1] : iconList.topSrc[0]" style="transform: rotateZ(45deg);width: 15px;height: 15px;margin-top: 10px;margin-left: 10px"/>
     </div>
     <div class="left" @click="setRotation('1')">
     <img src="../../../../assets/svg/zhuan.svg" style="transform: rotateZ(-180deg) rotateX(180deg);width: 15px;height: 15px;margin-top: 9px;margin-left: 9px"/>
     </div>
     <div class="center">{{rotation}}</div>
     <div class="right" @click="setRotation('0')">
     <img src="../../../../assets/svg/zhuan.svg" style="transform: rotateZ(0deg);width: 15px;height: 15px;margin-top: 10px;margin-left: 10px"/>
     </div>
     <div :class="{bottom: true, botHover: scale <= 1 ? false : true}" @click="setScale('1')">
     <img :src="scale <= 1 ? iconList.bottomSrc[1] : iconList.bottomSrc[0]" style="transform: rotateZ(45deg);width: 15px;height: 15px;margin-top: 10px;margin-left: 10px"/>
     </div>
     </div>

     iconList: {
          bottomSrc: [
            bot,
            botDis
          ],
          topSrc: [
            top,
            topDis
          ],
          translate: [
            zhuan,
            zhuanDis
          ]
        },

     setRotation(e) {
        if (e === '0') {
          if (this.rotation === 270) {
            this.rotation = 0;
            return;
          } else {
            this.rotation += 90;
          }
        } else {
          if (this.rotation === 0) {
            this.rotation = 270;
            return;
          }
          this.rotation -= 90;
        }
      },
     setScale(e) {
        if (this.timerScale) {
          clearTimeout(this.timerScale);
        }
        this.timerScale = setTimeout(() => {
          if (e === '0') {
            if (this.scale <= 1.3) {
              this.updateLoading(true);
              this.scale += 0.1;
            }
          } else {
            if (this.scale <= 1) {
              this.scale = 1;
              return;
            }
            this.updateLoading(true);
            this.scale -= 0.1;
          }
        }, 10);
        setTimeout(() => {
          this.updateLoading(false);
        }, 2000)
      },



     .out {
  position: fixed;
  width: 80px;
  height: 80px;
  z-index: 400;
  cursor: pointer;
}
     .center {
  position: absolute;
  width: 30px;
  height: 30px;
  z-index: 200;
  background: #fff;
  left: 50%;
  margin-left: -15px;
  top: 50%;
  margin-top: -15px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #ffa082;
}
     .top {
  position: absolute;
  width: 34px;
  height: 34px;
  background: #fff;
  left: 50%;
  margin-left: -17px;
  border-radius: 34px 0 0 0;
  transform: rotateZ(45deg);
}
     .left {
  position: absolute;
  width: 34px;
  height: 34px;
  background: #fff;
  top: 50%;
  margin-top: -17px;
  border-radius: 34px 0 0 0;
  transform: rotateZ(-45deg);
}
     .right {
  position: absolute;
  width: 34px;
  height: 34px;
  background: #fff;
  right: 0;
  top: 50%;
  margin-top: -17px;
  border-radius: 0 34px 0 0;
  transform: rotateZ(45deg);
}
     .bottom {
  position: absolute;
  width: 34px;
  height: 34px;
  background: #fff;
  bottom: 0;
  left: 50%;
  margin-left: -17px;
  border-radius: 0 0 0 34px;
  transform: rotateZ(-45deg);
}
     .botHover:hover {
  background: #aaaaaa;
}
     .topHover:hover {
  background: #aaaaaa;
}
     .left:hover {
  background: #aaaaaa;
}
     .right:hover {
  background: #aaaaaa;
}

     *
     *
     * */
  }
</script>

<style scoped>
  .lnn-operate-info {
    height: 30px;
    width: 150px;
    left: 40px;
    position: absolute;
    background: #9a9fb8;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    align-items: center;
  }


  .lnn-operate {
    width: 30px;
    height: auto;
    z-index: 400;
    position: absolute;
    background: #9a9fb8;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
  }
  .flex-center {
    display: flex;
    justify-content: center;
  }

  .lnn-icon {
    color: #ffffff;
    align-items: center;
    width: 30px;
    height: 20px;
  }
  .lnn-icon:hover {
    color: #a1a1a1;
    cursor: pointer;
  }

.out {
  position: relative;
  width: 80px;
  height: 80px;
}
  .center {
    position: absolute;
    width: 30px;
    height: 30px;
    z-index: 200;
    background: #d8dec3;
    left: 50%;
    margin-left: -15px;
    top: 50%;
    margin-top: -15px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #7b7b7b;
  }
  .top {
    position: absolute;
    width: 34px;
    height: 34px;
    background: #d9dede;
    left: 50%;
    margin-left: -17px;
    border-radius: 34px 0 0 0;
    transform: rotateZ(45deg);
  }
  .left {
    position: absolute;
    width: 34px;
    height: 34px;
    background: #d9dede;
    top: 50%;
    margin-top: -17px;
    border-radius: 34px 0 0 0;
    transform: rotateZ(-45deg);
  }
  .right {
    position: absolute;
    width: 34px;
    height: 34px;
    background: #d9dede;
    right: 0;
    top: 50%;
    margin-top: -17px;
    border-radius: 0 34px 0 0;
    transform: rotateZ(45deg);
  }
  .bottom {
    position: absolute;
    width: 34px;
    height: 34px;
    background: #d9dede;
    bottom: 0;
    left: 50%;
    margin-left: -17px;
    border-radius: 0 0 0 34px;
    transform: rotateZ(-45deg);
  }
  .right:hover, .top:hover, .left:hover, .bottom:hover {
    background: whitesmoke;
  }
</style>
