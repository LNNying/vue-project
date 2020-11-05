<template>
  <div>
    <lnn-select
      size="small"
      :data="data"
      v-model="dddd"
      :width="500"
      field-name="ownerName"
      field-key="ownerCode"
      :filter-data="true"
      :multiple="false"
      back-color="#fff"
      @on-change="onChange"
      @on-select="onSelect">

    </lnn-select>
  </div>

</template>

<script>
    import LnnSelect from "./component/lnn-select";
    export default {
        name: "select",
      components: {LnnSelect},
      data() {
          return {
            dddd: '',
            data: [
              {
                ownerCode: 1,
                ownerName: '12'
              },
              {
                ownerCode: 2,
                ownerName: '22'
              },
              {
                ownerCode: 3,
                ownerName: '33'
              },
              {
                ownerCode: 4,
                ownerName: '44'
              },
              {
                ownerCode: 5,
                ownerName: '12'
              },
              {
                ownerCode: 6,
                ownerName: '22'
              },
              {
                ownerCode: 7,
                ownerName: '33'
              },
              {
                ownerCode: 8,
                ownerName: '44'
              },
              {
                ownerCode: 9,
                ownerName: '12'
              },
              {
                ownerCode: 10,
                ownerName: '22'
              }
            ]
          }
      },
      methods: {
        onChange(val) {
          console.log(this.dddd);
          console.log(val);
        },
        onSelect(val) {
          console.log(val);
        }
      }
    }
</script>

<style scoped>

</style>
