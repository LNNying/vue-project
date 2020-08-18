<template>
  <div>
    <selectTree v-model="queryForm.queryVal2" :size="100" clearable :treeData="treeData"></selectTree>
  </div>
</template>

<script>
  import selectTree from 'iview-tree-select'

  export default {
    name: "select-my-tree-select",
    components: {
      selectTree
    },
    data() {
      return {
        queryForm: {
          queryVal1: '',
          queryVal2: []
        },
        treeData: [
          {
            title: '中国',
            expand: true,
            value: '1',
            children: [
              {
                title: '福建',
                expand: true,
                value: '11',
                children: [
                  {
                    value: '111',
                    title: '宁德',
                    expand: true,
                    children: [
                      {
                        value: '111111',
                        title: '福安'
                      },
                      {
                        value: '2222222',
                        title: '寿宁'
                      },
                      {
                        value: '3333333',
                        title: '周宁'
                      }
                    ]
                  },
                  {
                    value: '112',
                    title: '厦门'
                  },
                  {
                    value: '1123',
                    title: '福建'
                  },
                  {
                    value: '1124',
                    title: '泉州'
                  },
                  {
                    value: '1125',
                    title: '莆田'
                  },
                  {
                    value: '1126',
                    title: '三明'
                  },
                  {
                    value: '1127',
                    title: '龙岩'
                  }
                ]
              },
              {
                title: '广东',
                value: '12',
                expand: true,
                children: [
                  {
                    value: '121',
                    title: '广州'
                  },
                  {
                    value: '122',
                    title: '深圳'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
