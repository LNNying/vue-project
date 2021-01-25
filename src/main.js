// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import importDirective from '@/directive'
import {directive as clickOutside} from 'v-click-outside-x'
import installPlugin from '@/plugin'
import VueAuth from '@websanova/vue-auth'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'
import Clickoutside from 'element-ui/src/utils/clickoutside'
import './index.less'
import '@/assets/icons/iconfont.css'
import TreeTable from 'tree-table-vue'
import VOrgTree from 'v-org-tree'
import 'v-org-tree/dist/v-org-tree.css'
import md5 from 'js-md5'
import VueKonva from 'vue-konva'
import jsoneditor from 'jsoneditor'
import Element from 'element-ui'
import $ from 'jquery'
import '../src/static/ztree/jquery.ztree.core.min'
import '../src/static/ztree/jquery.ztree.excheck.min'
import '../src/static/ztree/jquery.ztree.exedit.min'
import '../src/static/ztree/zTreeStyle/zTreeStyle.css'
import IdleVue from 'idle-vue';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import 'vue-easytable/libs/themes-base/index.css'
import {VTable,VPagination} from 'vue-easytable'

Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);
Vue.component('v-select', vSelect)

// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock')
Vue.use(VueKonva)

Vue.prototype.$md5 = md5;

Vue.prototype.$jquery = $

Vue.prototype.$jsoneditor = jsoneditor

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
});
const eventsHub = new Vue();

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  store,
  idleTime: 3000, // 3秒钟,
  startAtIdle: false
})

Vue.use(TreeTable)
Vue.use(VOrgTree)
Vue.use(VueAxios, axios);
Vue.router = router;

String.prototype.trim = function () {
  return this.replace(/(^\s*)|(\s*$)/g, '');
};

String.prototype.replaceAll = function (FindText, RepText) {
  let regExp = new RegExp(FindText, 'g');
  return this.replace(regExp, RepText);
};



Vue.axios.defaults.baseURL = config.url;
Vue.axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.axios.defaults.headers.get['Content-Type'] = 'application/json';

Vue.use(VueAuth, {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  rolesVar: 'authorities',
  tokenDefaultName: 'token',
  authRedirect: {path: '/login'},
  forbiddenRedirect: {path: '/403'},
  notFoundRedirect: {path: '/404'},
  token: [{request: 'Authorization', response: 'Authorization', authType: 'Bearer', foundIn: 'header'}],
  loginData: {url: '/api/authenticate', method: 'POST', redirect: '/', fetchUser: true},
  fetchData: {url: '/api/sUser/currentUserInfo', method: 'GET', enabled: true},
  refreshData: {url: 'auth/refresh', method: 'GET', enabled: false, interval: 30},
  logoutData: {redirect: '/login', makeRequest: false},
  parseUserData: function (data) {
    if (data && data.returnData && data.returnData.fieldSetting) {
      localStorage.fieldRequireSetting = JSON.stringify(data.returnData.fieldSetting);
    }
    return data.returnData;
  }
});

/**
 * @description 注册admin内置插件
 */
installPlugin(Vue)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
importDirective(Vue)
Vue.directive('clickOutside', Clickoutside)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
});
