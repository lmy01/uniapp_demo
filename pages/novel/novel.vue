<template>
  <view class="container novel-new-container">
    <!-- uni ui 自定义导航栏NavBar -->
    <uni-nav-bar left-icon="back" right-icon="search" title="小说专区" @clickLeft="back" @clickRight="goSearch" status-bar="true" fixed="true"></uni-nav-bar>

    <view class="options-c">
      <view class="option-item" v-for="(item, index) in optionList" :key="index">
        <uni-icons :type="item.type" :size="item.size" :color="item.color"></uni-icons>
        <text>{{item.title}}</text>
      </view>
    </view>
    
    <!-- 最热小说 -->
    <view class="novel-hot-c">
      <view class="novel-hot-title-more">
        <view class="novel-hot-title">
          <text>最热小说</text>
          <image src="/static/movies/hot.png" class="novel-hot-title-tag"></image>
        </view>
        <view>
          <text>更多</text>
          <uni-icons type="forward" size="14" color="#666"></uni-icons>
        </view>
      </view>
      <view class="novel-hot-novels">
        <view class="novel-hot-item" v-for="(item, index) in novelList" :key="index">
          <image :src="item.url" class="novel-hot-item-image"></image>
          <view class="novel-hot-item-title-content">
            <view class="novel-hot-item-title">
              <text class="novel-title">{{item.title}}</text>
              <text class="novel-star" :style="item.star > 4.49 ? 'color: #dd524d;' : 'color: #f0ad4e;'">评分：{{item.star}}</text>
            </view>
            <view class="novel-hot-item-author-type">
              <text class="novel-author">{{item.author}}</text>
              <view>
                <text>{{item.type}}</text>
              </view>
            </view>
            <view class="novel-hot-item-content">
              {{item.content}}
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 最新小说 -->
    <view class="novel-new-c">
      <view class="novel-new-title-more">
        <view class="novel-new-title">
          <text>最新小说</text>
          <image src="/static/movies/new.png" class="novel-new-title-tag"></image>
        </view>
        <view>
          <text>更多</text>
          <uni-icons type="forward" size="18" color="#666"></uni-icons>
        </view>
      </view>
      <view class="novel-new-novels">
        <view class="novel-new-item" v-for="(item, index) in novelList" :key="index">
          <image :src="item.url" class="novel-new-item-image"></image>
          <view class="novel-new-item-title">
            <text>{{item.title}}</text>
            <view>
              <text>{{item.type}}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    uniIcons,
    uniSwiperDot,
    uniNavBar
  } from '@dcloudio/uni-ui'
  export default {
    components: {
      uniIcons,
      uniSwiperDot,
      uniNavBar
    },
    data() {
      return {
        current: 0,
        optionList: [
          {
            type: 'checkbox',
            size: 26,
            color: '#3cc51f',
            title: '会员专区'
          },
          {
            type: 'list',
            size: 26,
            color: '#3cc51f',
            title: '阅读记录'
          },
          {
            type: 'star',
            size: 26,
            color: '#3cc51f',
            title: '收藏列表'
          },
          {
            type: 'chat',
            size: 26,
            color: '#3cc51f',
            title: '评论列表'
          }
        ],
        novelList: [
          {
            url: '/static/movies/shu_zhandu.jpg',
            title: '战毒',
            content: '战毒战毒战毒战毒战毒战毒战毒战毒战毒战毒战毒战毒战毒战毒战毒战毒战毒战毒战毒战毒战毒战毒战毒战毒战毒',
            type: '警匪枪战',
            author: 'priest',
            star: 5
          },
          {
            url: '/static/movies/shu_dongman.jpg',
            title: '动漫吖',
            content: '动漫吖动漫吖动漫吖动漫吖动漫吖动漫吖动漫吖动漫吖动漫吖动漫吖动漫吖动漫吖动漫吖动漫吖',
            type: '校园爱情',
            author: '白雪薇薇',
            star: 4.5
          },
          {
            url: '/static/movies/shu_xihuanni.jpg',
            title: '喜欢你',
            content: '喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你',
            type: '无脑恋爱',
            author: 'priest',
            star: 4.8
          },
          {
            url: '/static/movies/shu_gesila.jpg',
            title: '哥斯拉2',
            content: '哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2',
            type: '魔幻',
            author: 'priest',
            star: 4
          },
          {
            url: '/static/movies/shu_gesila.jpg',
            title: '哥斯拉2',
            content: '哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2',
            type: '魔幻',
            author: 'priest',
            star: 3.9
          },
          {
            url: '/static/movies/shu_gesila.jpg',
            title: '哥斯拉2',
            content: '哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2哥斯拉2',
            type: '警匪枪战',
            author: 'priest',
            star: 4
          }
        ],
      }
    },
    onLoad() {

    },
    methods: {
      back() {
        uni.navigateBack({
          url: '../movie/movie'
        })
      },
      goSearch() {
        uni.navigateTo({
          url: '../search/search'
        })
      },
    }
  }
</script>

<style lang="less" scoped>
  .novel-new-container {
    .swiper-view{
      // padding: 15rpx;
      .swiper{
        height: 220rpx;
        .swiper-item{
          image{
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
    
    .options-c {
      padding: 15rpx;
      margin-bottom: 10rpx;
      display: flex;
      justify-content: space-around;
      background-color: #fff;
      box-shadow: 0 1rpx 3rpx #ddd;

      .option-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 13rpx;
      }
    }
    
    .novel-hot-c{
      margin-bottom: 10rpx;
      .novel-hot-title-more{
        padding: 5rpx 15rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .novel-hot-title{
          display: flex;
          align-items: center;
          >text{
            font-size: 30rpx;
            font-weight: bold;
          }
          .novel-hot-title-tag{
            width: 50rpx;
            height: 30rpx;
            margin-left: 10rpx;
          }
        }
      }
      .novel-hot-novels{
        .novel-hot-item{
          padding: 20rpx;
          margin: 8rpx;
          background-color: #fff;
          border-radius: 8rpx;
          box-shadow: 0 0 3rpx #ddd;
          display: flex;
          .novel-hot-item-image{
            width: 200rpx;
            height: 280rpx;
            margin-right: 15rpx;
          }
          .novel-hot-item-title-content{
            width: 1rpx;
            flex-grow: 1;
            .novel-hot-item-title{
              display: flex;
              justify-content: space-between;
              .novel-title{
                font-size: 30rpx;
                font-weight: bold;
              }
              .novel-star{
                font-size: 26rpx;
              }
            }
            .novel-hot-item-author-type{
              display: flex;
              justify-content: space-between;
              padding: 8rpx 0;
              .novel-author{
                color: #999;
                font-size: 26rpx;
              }
              view{
                color: #999;
                padding: 0 6rpx;
                border-radius: 8rpx;
                background-color: #f2f2f2;
                display: flex;
                align-items: center;
                text{
                  font-size: 24rpx;
                }
              }
            }
            .novel-hot-item-content{
              overflow : hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 5;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
    
    .novel-new-c{
      margin-bottom: 15rpx;
      .novel-new-title-more{
        padding: 8rpx 20rpx;
        display: flex;
        justify-content: space-between;
        .novel-new-title{
          display: flex;
          align-items: center;
          >text{
            font-size: 28rpx;
            font-weight: bold;
          }
          .novel-new-title-tag{
            width: 50rpx;
            height: 30rpx;
            margin-left: 8rpx;
          }
        }
        
      }
      .novel-new-novels{
        display: flex;
        overflow: auto;
        .novel-new-item{
          padding: 15rpx;
          margin: 8rpx;
          background-color: #fff;
          border-radius: 5rpx;
          box-shadow: 0 0 3rpx #ddd;
          position: relative;
          .novel-new-item-image{
            width: 160rpx;
            height: 240rpx;
          }
          .novel-new-item-title{
            display: flex;
            justify-content: space-between;
            >text{
              font-size: 28rpx;
              font-weight: bold;
            }
            view{
              color: #999;
              padding: 0 6rpx;
              border-radius: 8rpx;
              background-color: #f2f2f2;
              display: flex;
              align-items: center;
              text{
                font-size: 20rpx;
              }
            }
          }
          
        }
      }
    }
  }
</style>
