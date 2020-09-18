import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    tabbarCurrent: 0,
    releaseFlag: false
  },
  mutations: {
    changeCurrent(state, payload) {
      state.tabbarCurrent = payload
    },
    async toggleTab(state, payload) {
      state.tabbarCurrent = payload
      switch (state.tabbarCurrent) {
        case 0:
          uni.navigateTo({
            url: '../index/index',
            "animationType": "fade-in",
            "animationDuration": 200
          })
          state.releaseFlag = false
        break;
        case 1:
          uni.navigateTo({
            url: '../movie/movie',
            "animationType": "fade-in",
            "animationDuration": 200
          })
          state.releaseFlag = false
        break;
        case 2:
          state.releaseFlag = !state.releaseFlag
        break;
        case 3:
          uni.navigateTo({
            url: '../member/member',
            "animationType": "fade-in",
            "animationDuration": 200
          })
          state.releaseFlag = false
        break;
        case 4:
          uni.navigateTo({
            url: '../mine/mine',
            "animationType": "fade-in",
            "animationDuration": 200
          })
          state.releaseFlag = false
        break;
      }      
    },
  },
  actions: {
    
  },
  getters: {
    
  }
})

export default store