<template>
  <div>
    <Row>
      <i-col span="12">
        <p>
          iview-admin 处理  网址：https://www.cnblogs.com/ysxq/p/11052207.html
          问题原因：ie11- 不兼容 es6 语法 <br/>

          　　　　解决法案：<br/>


          　　　　　　方案一：安装"@babel/polyfill"<br/>


          　　　　　　　　　　然后发现依然不起作用，折腾了好久出来是出来了，但舍去和调改了好多东西，所以最终放弃这种方法<br/>


          　　　　　　方案二：安装 "babel-loader"<br/>

          1.安装依赖 （webpack官方安装地址： https://webpack.docschina.org/loaders/babel-loader/#%E5%AE%89%E8%A3%85）　　

          npm install -D babel-loader @babel/core @babel/preset-env webpack<br/>

          安装成功之后package.json 配置文件如下：<br/>
          "devDependencies": { <br/>
          "@babel/core": "^7.4.5",<br/>
          "@babel/preset-env": "^7.4.5",<br/>
          "@vue/cli-plugin-babel": "^3.0.1",<br/>
          "@vue/cli-plugin-eslint": "^3.0.1",<br/>
          "@vue/cli-plugin-unit-mocha": "^3.0.1",<br/>
          "@vue/cli-service": "^3.0.1",<br/>
          "@vue/eslint-config-standard": "^3.0.0-beta.10",<br/>
          "@vue/test-utils": "^1.0.0-beta.10",<br/>
          "babel-loader": "^8.0.6",<br/>
          "chai": "^4.1.2",<br/>
          "eslint-plugin-cypress": "^2.0.1",<br/>
          "less": "^2.7.3",<br/>
          "less-loader": "^4.0.5",<br/>
          "lint-staged": "^6.0.0",<br/>
          "mockjs": "^1.0.1-beta3",<br/>
          "vue-template-compiler": "^2.5.13",<br/>
          "webpack": "^4.34.0"<br/>
          },<br/>

          2.在vue.config.js 配置weibpack （Cli 官方webpack配置地址： https://cli.vuejs.org/zh/guide/webpack.html）<br/>

          module.exports = {<br/>
          　　　　　　　　　　//...
          　　　　　　　　　　configureWebpack:{<br/>

          module:{<br/>
          rules: [<br/>
          {<br/>
          test: /\.m?js$/,<br/>
          //exclude用下面配置的话，默认是过滤不编译node_modules 路径下的文件<br/>
          //exclude: /(node_modules|bower_components)/,<br/>
          //include 指定需要编译的文件路径<br/>
          include: [<br/>
          resolve('src'),<br/>
          resolve('node_modules/tree-table-vue/lib'),<br/>
          resolve('node_modules/v-org-tree/dist'),<br/>
          resolve('node_modules/iview/src/locale')<br/>
          ],<br/>
          use: {<br/>
          loader: 'babel-loader',<br/>
          options: {<br/>
          presets: ['@babel/preset-env']<br/>
          }
          }
          }
          ]
          }
          },
          chainWebpack: config => {<br/>
          config.resolve.alias<br/>
          .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))<br/>
          .set('_c', resolve('src/components'))<br/>
          }　　　　　　　　//...
          　　　　　　　　　}
        </p>
      </i-col>
      <i-col span="12">
        处理bug: IE 11+ 上传文件 <br/>
        1.html处理<br/>
        <textarea cols="100" rows="10">
        <input type="file" class="fileupload" @change="handleBeforeUpload(this)" ref="imFile" style="display: none"
               accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
        <Button icon="ios-cloud-upload-outline" class="button-space" :loading="uploadLoading" @click="handleUploadFile" size="small">
          导入
        </Button>
      </textarea><br/>

        方法处理<br/>
        <textarea cols="100" rows="10">
          引入   let XLSX = require('xlsx')
          handleUploadFile () {
          this.$refs.imFile.click()
          // 判断是否IE浏览器
          if (!!window.ActiveXObject || "ActiveXObject" in window) {
            // 挂起定时器
            setTimeout(function()
            {
              if( this.$refs.imFile.files) {
                this.handleBeforeUpload()
              }
            }, 0);
          }
          // this.initUpload()
        },


          handleBeforeUpload () {
          let obj = this.$refs.imFile
          if (!obj.files) {
            return
          }
          let f = obj.files[0]
          const fileExt = f.name.split('.').pop().toLocaleLowerCase()
          if (fileExt === 'xlsx' || fileExt === 'xls') {
            let reader = new FileReader()
            let $t = this
            reader.onload = function (e) {
              let data = e.content
              if ($t.rABS) {
                $t.wb = XLSX.read(btoa(this.fixdata(data)), {  // 手动转化
                  type: 'base64'
                })
              } else {
                $t.wb = XLSX.read(data, {
                  type: 'binary'
                })
              }
              let json = XLSX.utils.sheet_to_json($t.wb.Sheets[$t.wb.SheetNames[0]])
              $t.dealFile($t.analyzeData(json)) // analyzeData: 解析导入数据
            }
            if (this.rABS) {
              reader.readAsArrayBuffer(f)
            } else {
              reader.readAsBinaryString(f)
            }
            this.file = f
          } else {
            this.$Notice.warning({
              title: '文件类型错误',
              desc: '文件：' + f.name + '不是EXCEL文件，请选择后缀为.xlsx或者.xls的EXCEL文件。'
            })
          }
          return false
        },
          // 重写readAsBinaryString方法  IE中并不兼容
          reWriteBbinaryString() {
          FileReader.prototype.readAsBinaryString = function (fileData) {
            let binary = "";
            let pt = this;
            let reader = new FileReader();
            reader.onload = function (e) {
              let bytes = new Uint8Array(reader.result);
              let length = bytes.byteLength;
              for (let i = 0; i < length; i++) {
                binary += String.fromCharCode(bytes[i]);
              }
              pt.content = binary;
              pt.onload(pt); //页面内data取pt.content文件内容
            }
            reader.readAsArrayBuffer(fileData);
          }
        }
        </textarea>
        <br/>
        方法解释<br/>
        <p>很多时候，我们都需要通过 input 来上传文件，通过 change 事件获取用户上传的文件，然后做一些额外的处理，最后上传到服务器。</p>
        <p>可是事情往往就是没有那么美好。是的，IE 下 input 在选择文件后不触发 change 事件。</p>
        <p>那怎么办呢？</p>
        <p>其实解决办法也很简单，利用 IE 的一个特点就可以：IE 在对话框关闭前都会挂起 timeout。</p>
        <p>所以我们绑定 input 的 click 事件，然后开启一个定时器去获取文件就可以了。就像这样：</p>
        <p>也是就上面方法中handleUploadFile中</p>
      </i-col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: "ie"
  }
</script>

<style scoped>

</style>
