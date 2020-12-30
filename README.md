
vue 空闲监听  利用vuex和计算属性  不建议用在watch中
npm install --save idle-vue
import IdleVue from "idle-vue";

const eventsHub = new Vue();

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  store,
  idleTime: 3000 // 3秒钟,
  startAtIdle: false
});

<template>
  <div id="app">
    <p>Is it Idle? - {{ isIdle }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    isIdle() {
      return this.$store.state.idleVue.isIdle;
    }
  }
};
</script>





```bush
# clone the project
git clone https://github.com/iview/iview-admin.git

// install dependencies
npm install

// develop
npm run dev
```

## Build
```bush
npm run build
```
