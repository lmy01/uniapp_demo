<template>
  <view id="tabbar-bottom">
    <u-popup v-model="$store.state.releaseFlag" mode="bottom" :safe-area-inset-bottom="true">
      <view :style="{padding: '20rpx 20rpx 50rpx', backgroundColor: '#f8f8f8'}">
        <u-grid :col="3" :border="false">
          <u-grid-item>
            <u-icon name="photo" :size="46"></u-icon>
            <view class="grid-text">发布动态</view>
          </u-grid-item>
          <u-grid-item>
            <u-icon name="lock" :size="46"></u-icon>
            <view class="grid-text">发布小视频</view>
          </u-grid-item>
          <u-grid-item>
            <u-icon name="hourglass" :size="46"></u-icon>
            <view class="grid-text">直播</view>
          </u-grid-item>
        </u-grid>
      </view>
    </u-popup>
    <u-tabbar v-model="$store.state.tabbarCurrent" :list="tabList" active-color="#608000" :mid-button="true" :before-switch="toggleTab" bg-color="#F8F8F8"></u-tabbar>
  </view>
  </view>
</template>

<script>
  export default {
    props: ["current"],
    // 子组件中不能用页面的生命周期，所以这里不能用onLoad，改用mounted。
    mounted() {
      // console.log("-----tabbar.vue-----")
      this.$store.commit('changeCurrent', this.current)
    },
    data() {
      return {
        tabList: [
          {
            pagePath: '/pages/index/index',
            iconPath: "home",
            selectedIconPath: "home-fill",
            text: '首页',
            count: 2,
            isDot: true,
            customIcon: false,
          },
          {
            pagePath: '/pages/movie/movie',
            iconPath: "play-circle",
            selectedIconPath: "play-circle-fill",
            text: '电影',
            customIcon: false,
          },
          {
            iconPath: "plus-circle",
            selectedIconPath: "plus-circle-fill",
            text: '发布',
            midButton: true,
            customIcon: false,
          },
          {
            pagePath: '/pages/member/member',
            iconPath: "integral",
            selectedIconPath: "integral-fill",
            text: '会员',
            count: 8,
            isDot: false,
            customIcon: false,
          },
          {
            pagePath: '/pages/mine/mine',
            iconPath: "account",
            selectedIconPath: "account-fill",
            text: '我的',
            customIcon: false,
          },
        ],
        
      }
    },
    methods: {
      toggleTab(index) {
        this.$store.commit('toggleTab', index)
      }
    }
  }
</script>

<style lang="less" scoped>
  #tabbar-bottom{
    /deep/ .u-tabbar__content{
      z-index: 100000;
    }
    /deep/ .u-drawer-bottom{
      bottom: 50px;
    }
    /deep/ .u-grid-item-box{
      background-color: #f8f8f8;
    }
  }
</style>
