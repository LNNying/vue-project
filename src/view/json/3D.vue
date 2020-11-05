<template>
  <div>
    <Button type="primary" @click="down">下载</Button>
  </div>
</template>


<script>
    // import * as Three from 'three'
    import {write} from '../../api/new'
    export default {
        name: "3D",
      methods: {
          down() {
            write().then(response => {
              if (response.data.returnCode === 200) {
                let blob = response.data.returnData
                var reader = new FileReader();
                reader.readAsDataURL(blob);   // 转换为base64，可以直接放入a标签href
                reader.onload = function (e) {
                  // 转换完成，创建一个a标签用于下载
                  var a = document.createElement('a');
                  a.download = '学生信息.xlsx';
                  a.href = e.target.result;
                  document.getElementsByTagName('body').append(a);    // 修复firefox中无法触发click
                  a.click();
                  document.getElementsByTagName(a).remove();
                  window.location.reload();
                }
              } else {

              }
            })
          }
      }
    }
</script>

<style scoped>

</style>
