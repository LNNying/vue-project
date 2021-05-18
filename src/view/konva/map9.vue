<template>
  <div>
    <Divider orientation="left">框选地图表格</Divider>
    <p style="color: red;">注意：
      判断的是四个顶点位置
    <span v-html="content"></span>
    </p>
    <Divider orientation="left">求旋转坐标</Divider>
    <h1>圆周运动 已知(角度、圆周半径、圆周中心点)</h1>
    centerX、centerY：中心点
    angle：旋转角度
    radius：圆周半径
    newX = centerX + Math.sin(angle) * radius;
    newY = centerY + Math.cos(angle) * radius;
    <h3>只知道中心点(center point)和目标物体的位置</h3>
    dx = newX - centerX;
    dy = newY - centerY;
    angle = Math.atan2(dy, dx);
    radius = Math.sqrt(dx * dx, dy * dy);
    <br />
    <h1>只有物体的x,y坐标，和每一帧物体旋转的角度。</h1>
    newX = x * Math.cos(rotation) - y * Math.sin(rotation);
    newY = y * Math.sin(rotation) + x * Math.cos(rotation);
    <h3>推导 一</h3>
    x = radius * Math.cos(angle);
    y = radius * Math.sin(angle);
    newX = radius * Math.cos(angle + rotation);
    newY = radius * Math.sin(angle + rotation);
    <h3>推导 二</h3>
    //已知公式
    cos(a + b) = cos(a) * cos(b) - sin(a) * sin(b);
    sin(a + b) = sin(a) * cos(b) + cos(a) * sin(b);
    <h3>推导 三</h3>
    //所以可以化简成这种形式
    newX = radius * Math.cos(angle) * Math.cos(rotation) - radius * Math.sin(angle) * Math.sin(rotation);
    newY = radius * Math.sin(angle) * Math.cos(rotation) + radius * Math.cos(angle) * Math.sin(rotation);
    <h3>推导 四</h3>
    //又因为 x = radius*cos(angle); y = radius*sin(angle); 将其代入得
    newX = x * cos(rotation) - y * sin(rotation);
    newY = y * cos(rotation) + x * sin(rotation);
    <br />
    <h1>如果设置了一个中心点，有物体的x,y坐标，和每一帧物体旋转的角度</h1>
    newX = (x - centerX) * cos(rotation) - (y - centerY) * sin(rotation);
    newY = (y - centerY) * cos(rotation) + (x - centerX) * sin(rotation);
    <Divider orientation="left">Konva zIndex</Divider>
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
        layer: null,
        content: '((obj.x <= data.x && data.x <= obj.endX && obj.y <= data.y && data.y <= obj.endY) ||\n' +
          '      (obj.x <= endX && endX <= obj.endX && obj.y <= endY && endY <= obj.endY) ||\n' +
          '      (obj.x <= endX && endX <= obj.endX && obj.y <= data.y && data.y <= obj.endY) ||\n' +
          '      (obj.x <= data.x && data.x <= obj.endX && obj.y <= endY && endY <= obj.endY))'
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
