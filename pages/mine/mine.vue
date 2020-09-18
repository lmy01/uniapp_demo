<template>
  <view class="container mine-container">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="mine-c-content">
      <!-- 顶端固定导航 -->
      <view class="fix-search" v-show="showFixHeader" :style="avatarInfoOpacity < 0.5 ? 'opacity: ' + (1 - avatarInfoOpacity) + ';' : 'opacity: 0;'">
        <uni-icons type="scan" size="22" color="#3cc51f"></uni-icons>
        <uni-search-bar class="search-box" v-model="searchTitle" :radius="20" clearButton="auto" cancelButton="none"
          placeholder="请输入问题名称" @confirm="confirmSearch"></uni-search-bar>
      </view>
      <view class="search-avatar-info-container" :style="'opacity: ' + avatarInfoOpacity + ';'">
        <!-- 头像信息上面的导航栏 -->
        <view class="search-container">
          <uni-icons type="scan" size="22" color="#fff"></uni-icons>
          <uni-search-bar class="search-box" v-model="searchTitle" :radius="20" clearButton="auto" cancelButton="none" placeholder="请输入问题名称" @confirm="confirmSearch"></uni-search-bar>
        </view>
        <!-- 头像个人信息和会员栏 -->
        <view class="avatar-info-container">
          <view class="avatar-container">
            <view class="avatar">
              <image src="/static/icons/avatar_boy.png" class="image_avatar"></image>
              <image src="/static/icons/member_selected.png" class="image-level"></image>
              <view class="name-container">
                <text>隔壁王二</text>
                <view class="level">
                  绿选等级：6
                </view>
              </view>
            </view>
            <view class="info" @click="goInfo">
              <text>个人中心</text>
              <uni-icons type="forward" size="18" color="#666"></uni-icons>
            </view>
          </view>
          <!-- 会员栏 -->
          <view class="member-container">
            <view class="text-container">
              <view>
                <image src="../../static/icons/member_selected.png"></image>
                <text>我的绿选会员</text>
              </view>
              <view>
                <text>为你精选好内容</text>
                <uni-icons type="forward" size="16" color="#3cc51f"></uni-icons>
              </view>
            </view>
          </view>
        </view>

      </view>
      <view class="activity-container">
        <view class="activity-inner">
          <uni-grid :column="3" :show-border="false" :square="false" class="grid-c">
            <uni-grid-item class="grid-item" v-for="(item, index) in activityList" :key="index">
              <view>
                <image :src="item.url"></image>
                <text class="text">{{item.title}}</text>
              </view>
            </uni-grid-item>
          </uni-grid>
        </view>
        <view class="activity-inner">
          <uni-grid :column="3" :show-border="false" :square="false" class="grid-c">
            <uni-grid-item class="grid-item" v-for="(item, index) in activityList" :key="index">
              <view>
                <image :src="item.url"></image>
                <text class="text">{{item.title}}</text>
              </view>
            </uni-grid-item>
          </uni-grid>
        </view>
        <view class="activity-inner">
          <uni-grid :column="3" :show-border="false" :square="false" class="grid-c">
            <uni-grid-item class="grid-item" v-for="(item, index) in activityList" :key="index">
              <view>
                <image :src="item.url"></image>
                <text class="text">{{item.title}}</text>
              </view>
            </uni-grid-item>
          </uni-grid>
        </view>
        <view class="activity-inner">
          <uni-grid :column="3" :show-border="false" :square="false" class="grid-c">
            <uni-grid-item class="grid-item" v-for="(item, index) in activityList" :key="index">
              <view>
                <image :src="item.url"></image>
                <text class="text">{{item.title}}</text>
              </view>
            </uni-grid-item>
          </uni-grid>
        </view>
        <view class="activity-inner">
          <uni-grid :column="3" :show-border="false" :square="false" class="grid-c">
            <uni-grid-item class="grid-item" v-for="(item, index) in activityList" :key="index">
              <view>
                <image :src="item.url"></image>
                <text class="text">{{item.title}}</text>
              </view>
            </uni-grid-item>
          </uni-grid>
        </view>
      </view>
    </view>
    <!-- 底部tabbar和发布弹框popup -->
    <tabbar :current="4"></tabbar>
  </view>
</template>

<script>
  import {
    uniIcons,
    uniSearchBar,
    uniGrid,
    uniGridItem
  } from '@dcloudio/uni-ui'
  export default {
    components: {
      uniIcons,
      uniSearchBar,
      uniGrid,
      uniGridItem
    },
    onLoad() {
      // console.log("-----mine.page-----")
    },
    data() {
      return {
        lastScrollTop: 0,
        showFixHeader: false,
        searchPlaceholder: '大家都在搜',
        searchTitle: null,
        avatarInfoOpacity: 1,
        activityList: [
          {
            title: '购买会员',
            url: '/static/icons/diamond.png'
          },
          {
            title: '最新活动',
            url: '/static/icons/find.png'
          },
          {
            title: '浏览记录',
            url: '/static/icons/main_selected.png'
          },
          {
            title: '用户反馈',
            url: '/static/icons/message.png'
          },
          {
            title: '最新小说',
            url: '/static/icons/book.png'
          },
          {
            title: '推荐有礼',
            url: '/static/icons/red_envelope.png'
          }
        ],
      }
    },
    
    onPageScroll(e) {
      // console.log(e)
      if (e.scrollTop < 250) {
        this.avatarInfoOpacity = 1 - (e.scrollTop / 250)
        // console.log(this.avatarInfoOpacity)
        this.showFixHeader = false
        if (this.avatarInfoOpacity < 0.5) {
          this.showFixHeader = true
        }
      }
      this.lastScrollTop = e.scrollTop
    },
    methods: {
      confirmSearch() {

      },
      goInfo() {
        uni.navigateTo({
          url: '../info/info'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .mine-container {

    .status_bar {
      background-color: #99CC00;
    }

    .mine-c-content {
      position: relative;

      // 固定导航栏
      .fix-search {
        width: 100%;
        padding: 10rpx;
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 0 1px 3px #ddd;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1000;
        display: flex;
        align-items: center;

        .search-box {
          flex-grow: 1;
          background-color: transparent;
          /deep/ .uni-searchbar__box{
            height: 60rpx;
          }
        }
      }

      .search-avatar-info-container {
        padding: 22rpx 22rpx 120rpx;
        margin-bottom: 120rpx;
        background-color: #99CC00;
        border-radius: 0 0 20rpx 20rpx;
        position: relative;

        .search-container {
          width: 100%;
          height: 70rpx;
          padding: 20rpx 0;
          box-sizing: border-box;
          display: flex;
          align-items: center;

          .search-box {
            flex-grow: 1;
            background-color: transparent;
            /deep/ .uni-searchbar__box{
              height: 60rpx;
            }
          }
        }

        .avatar-info-container {
          box-sizing: border-box;
          width: 100%;
          // height: 100rpx;
          padding: 20rpx;
          position: absolute;
          left: 0;
          top: 100rpx;

          .avatar-container {
            box-sizing: border-box;
            width: 100%;
            height: 160rpx;
            padding: 20rpx;
            background-color: #fff;
            border-radius: 10rpx;
            display: flex;
            justify-content: space-between;
            align-items: center;
            // 与下面的.member-container配合使用
            position: relative;
            z-index: 1;

            .avatar {
              position: relative;
              display: flex;
              align-items: center;

              .image_avatar {
                width: 80rpx;
                height: 80rpx;
                border-radius: 80rpx;
                margin-right: 15rpx;
              }

              .image-level {
                width: 30rpx;
                height: 30rpx;
                position: absolute;
                top: -18rpx;
                left: 50rpx;
                transform: rotate(25deg);
              }

              .name-container {
                text {
                  font-size: 30rpx;
                  font-weight: bold;
                }

                .level {
                  // width: 80rpx;
                  padding: 2px 5px;
                  color: #3cc51f;
                  font-size: 24rpx;
                  border-radius: 6rpx;
                  background-color: #ECFCE9;
                }
              }

            }

            .info {
              display: flex;
              align-items: center;
            }
          }

          .member-container {
            box-sizing: border-box;
            width: 100%;
            padding: 0 20rpx;
            position: absolute;
            left: 0;
            top: 165rpx;
            // 设为-1会导致刚进入页面时不展示，所以将此处设为0，将.avatar-container设为1
            z-index: 0;

            .text-container {
              font-size: 24rpx;
              padding: 24rpx 16rpx 16rpx;
              border-radius: 0 0 15rpx 15rpx;
              background-color: #608000;
              display: flex;
              align-items: center;
              justify-content: space-between;

              >view {
                color: #3cc51f;
                display: flex;
                align-items: center;
                justify-content: space-between;

                >image {
                  width: 30rpx;
                  height: 30rpx;
                  margin-right: 10rpx;
                }
              }
            }
          }
        }

      }

      .activity-container {
        // height: 500rpx;
        padding: 14rpx;

        .activity-inner {
          padding: 16rpx;
          margin: 16rpx 0;
          border-radius: 16rpx;
          background-color: #fff;
          box-shadow: 0 0 1px #ddd;

          .grid-c {

            .grid-item {

              view {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 16rpx;

                image {
                  width: 40rpx;
                  height: 40rpx;
                  margin-bottom: 12rpx;
                }
              }

            }
          }
        }
      }
    }


  }
</style>
