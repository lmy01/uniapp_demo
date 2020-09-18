<template>
  <view class="container index-container" @click="clickView">
    <uni-nav-bar left-icon="scan" right-icon="search" @clickRight="goSearch" title="主页" status-bar="true" fixed="true"></uni-nav-bar>
    <!-- 内容区域 -->
    <view class="view-item" v-for="(item, index) in list" :key="index">
      <view class="view-item-item view-item-title">{{item.text.slice(0, 10)}}</view>
      <view class="view-item-item view-item-icon-author">
        <image class="view-item-icon" :src="item.header"></image>
        <text>{{item.name}}</text>
      </view>
      <view class="view-item-item view-item-content">{{item.text}}</view>
      <view class="view-item-item view-item-agree-collect-more">
        <view class="view-item-agree-collect">
          <text class="view-item-agree">{{item.up}} 赞同</text>
          <text class="view-item-collect">{{item.comment}} 收藏</text>
        </view>
        <view class="view-item-more">
          <image class="view-item-more-icon" src="/static/icons/more.png" @click.stop="clickMore(item, index)"></image>
          <view class="select-list" v-if="item.show">
            <view class="select-option">
              屏蔽这个问题
            </view>
            <view class="select-option">
              设置屏蔽关键词
            </view>
            <view class="select-option">
              举报
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 底部tabbar和发布弹框popup -->
    <tabbar :current="0"></tabbar>
  </view>
</template>

<script>
  import {
    uniIcons,
    uniNavBar
  } from '@dcloudio/uni-ui'
  export default {
    components: {
      uniIcons,
      uniNavBar
    },
    onLoad() {
      // console.log("-----index.page-----")
      console.log(this.list)
      this.query()
    },
    data() {
      return {
        // showPopup: false,
        showMoreIndex: null,
        page: 1,
        count: 20,
        list: []
      }
    },    
    onPullDownRefresh() {
      this.page += this.page
      this.query('pull')
    },
    onReachBottom() {
      // console.log(111)
      this.page += this.page
      this.query('bottom')
    },
    onPageScroll(e) {
      // console.log(e)
    },
    methods: {
      query(flag) {
        uni.request({
          url: 'https://api.apiopen.top/getJoke?page=' + this.page + '&count=' + this.count + '&type=video',
          method: 'GET', // 必须大写
          success: (res) => {
            // console.log(res.data)
            if(!flag) {
              this.list = res.data.result
            }else {
              if(flag === 'pull') {
                this.list.unshift(...res.data.result)
              }
              if(flag === 'bottom') {
                this.list.push(...res.data.result)
              }
            }            
          },
          complete: () => {
            uni.stopPullDownRefresh();
          }
        })
      },
      clickView() {
        if (this.showMoreIndex !== null) {
          this.list[this.showMoreIndex].show = false
          this.showMoreIndex = null
        }
      },
      goSearch() {
        uni.navigateTo({
          url: '../search/search'
        })
      },
      clickMore(item, index) {
        // console.log(item.show)
        if (this.showMoreIndex === null) {
          this.$set(item, 'show', true)
          this.showMoreIndex = index
        } else {
          this.list[this.showMoreIndex].show = false
          this.showMoreIndex = null
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .index-container {
    .view-item {
      min-height: 100rpx;
      background-color: #fff;
      margin: 16rpx 0;
      padding: 16rpx 20rpx;
      box-shadow: 0 1px 3px #ddd;

      .view-item-item {
        margin: 6rpx 0;
      }

      .view-item-title {
        font-size: 30rpx;
        font-weight: bold;
        margin-bottom: 8rpx;
      }

      .view-item-icon-author {
        font-size: 26rpx;
        display: flex;
        align-items: center;
      }

      .view-item-icon {
        width: 34rpx;
        height: 34rpx;
        border-radius: 34rpx;
        margin-right: 8rpx;
      }

      .view-item-content {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin: 12rpx 0;
      }

      .view-item-agree-collect-more {
        color: #999;
        font-size: 24rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5rpx;
      }

      .view-item-agree {
        margin-right: 14rpx;
      }

      .view-item-more {
        position: relative;
      }

      .view-item-more-icon {
        width: 28rpx;
        height: 28rpx;
        opacity: .4;
        vertical-align: middle;
      }
    }



    .select-list {
      width: 220rpx;
      padding: 16rpx;
      color: #333;
      background-color: #f9f9f9;
      box-shadow: 0 0 4rpx #ddd;
      position: absolute;
      left: -194rpx;
      top: 0;
      z-index: 100;
      transition: width 2s linear;
    }

    .select-option {
      padding: 15rpx 8rpx;
      font-size: 24rpx;
    }
  }
</style>
