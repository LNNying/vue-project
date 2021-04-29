import adminConfig from '../../components/layout/theme/admin.theme.config'
export default {
  namespaced: true,
  state: {
    settingShow: true,
    animates: adminConfig.animates,
    animate: {
      disabled: false,                    //禁用动画，true:禁用，false:启用
      name: 'bounce',                     //动画效果，支持的动画效果可参考 ./animate.config.js
      direction: 'left'                   //动画方向，切换页面时动画的方向，参考 ./animate.config.js
    }
  },
  mutations: {
    settingShow(state, payload) {
      state.settingShow = payload;
    },
    setAnimate (state, animate) {
      state.animate = animate
    },
  },
  actions: {
    settingShow({commit}, settingShow) {
      commit('settingShow', settingShow);
    }
  },
  getters: {}
}
