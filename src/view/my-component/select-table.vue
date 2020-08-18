<template>
    <select-table-lnn
      :columns="columns"
      size="small"
      :data="data"
      code-key="code"
      name-key="name"
      :multiple="true"

      @on-change="onChange"></select-table-lnn>
</template>

<script>
    import SelectTableLnn from "./component/select-table-lnn";
    export default {
        name: "select-table",
      components: {SelectTableLnn},
      data() {
          return {
            listQuery: {
              pageNum: 1,
              pageSize: 10,
              total: 0
            },
            columns: [
              {
                title: '名称',
                key: 'name'
              },
              {
                title: '代码',
                key: 'code'
              }
            ],
            data: [
              {name: '测试', code: 'ceshi'},
              {name: '测试01', code: 'ceshi01'},
              {name: '测试02', code: 'ceshi02'},
              {name: '测试02', code: 'ceshi03'},
              {name: '测试02', code: 'ceshi04'},
              {name: '测试02', code: 'ceshi05'},
              {name: '测试02', code: 'ceshi06'},
              {name: '测试02', code: 'ceshi07'},
              {name: '测试02', code: 'ceshi08'},
              {name: '测试02', code: 'ceshi09'},
              {name: '测试02', code: 'ceshi10'},
              {name: '测试02', code: 'ceshi11'},
              {name: '测试02', code: 'ceshi12'},
              {name: '测试02', code: 'ceshi13'}
            ]
          }
      },
      methods: {
        onChange(val) {
          console.log(val);
        }
      }
    }
</script>

<style scoped>

</style>
