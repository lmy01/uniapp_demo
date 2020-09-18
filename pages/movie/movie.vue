<template>
  <view class="container movie-container">
    <!-- uni ui 自定义导航栏NavBar -->
    <uni-nav-bar right-icon="search" title="电影专区" @clickRight="goSearch" status-bar="true" fixed="true"></uni-nav-bar>
    <!-- 轮播图 -->
    <view class="swiper-view">
      <uni-swiper-dot :current="swiperCurrent" :info="swiperList" mode="nav" field="title" :dotsStyles="{color: '#3cc51f',backgroundColor: 'rgba(236, 252, 233, .2)'}">
        <swiper class="swiper" @change="change" autoplay>
          <swiper-item class="swiper-item" v-for="(item, index) in swiperList" :key="index">
            <image :src="item.url"></image>
          </swiper-item>
        </swiper>
      </uni-swiper-dot>
      
    </view>
    <view class="options-c">
      <view class="option-item" v-for="(item, index) in optionList" :key="index" @click="goNovel(index)">
        <uni-icons :type="item.type" :size="item.size" :color="item.color"></uni-icons>
        <text>{{item.title}}</text>
      </view>
    </view>
    
    <!-- 热播电影 -->
    <view class="phb-c">
      <view class="phb-title-more">
        <view class="phb-title">
          <text>热播电影</text>
          <image src="/static/movies/hot.png" class="phb-title-tag"></image>
        </view>
        <view class="phb-more">
          <text>更多</text>
          <uni-icons type="forward" size="14" color="#666"></uni-icons>
        </view>
      </view>
      <view class="phb-movies">
        <view class="phb-movie-item" v-for="(item, index) in phbList" :key="index">
          <image :src="item.url" class="phb-movie-item-image"></image>
          <view class="phb-movie-item-title">
            <text>{{item.title}}</text>
            <view>
              <text>{{item.type}}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 排行榜 -->
    <view class="phb-c">
      <view class="phb-title-more">
        <view class="phb-title">
          <text>最新电影</text>
          <image src="/static/movies/new.png" class="phb-title-tag"></image>
        </view>
        <view class="phb-more">
          <text>更多</text>
          <uni-icons type="forward" size="14" color="#666"></uni-icons>
        </view>
      </view>
      <view class="phb-movies">
        <view class="phb-movie-item" v-for="(item, index) in phbList" :key="index">
          <image :src="item.url" class="phb-movie-item-image"></image>
          <view class="phb-movie-item-title">
            <text>{{item.title}}</text>
            <view>
              <text>{{item.type}}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 底部tabbar和发布弹框popup -->
    <tabbar :current="1"></tabbar>
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
    onLoad() {
      // console.log("-----movie.page-----")
      
    },
    data() {
      return {
        swiperCurrent: 0,
        swiperList: [
          {
            url: '/static/movies/heng_1917.png',
            title: '电影1917 最好看的电影'
          },
          {
            url: '/static/movies/heng_dongxuan.jpg',
            title: '董璇最新出演电影剧照'
          },
          {
            url: '/static/movies/heng_dongman.jpg',
            title: '经典动漫再度来袭'
          }
        ],
        optionList: [
          {
            type: 'checkbox',
            size: 26,
            color: '#3cc51f',
            title: '小说专区'
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
        phbList: [
          {
            url: '/static/movies/shu_zhandu.jpg',
            title: '战毒',
            type: '警匪枪战',
            isNew: true,
            isHot: true
          },
          {
            url: '/static/movies/shu_dongman.jpg',
            title: '动漫吖',
            type: '校园爱情',
            isNew: true,
            isHot: true
          },
          {
            url: '/static/movies/shu_xihuanni.jpg',
            title: '喜欢你',
            type: '无脑恋爱',
            isNew: true,
            isHot: true
          },
          {
            url: '/static/movies/shu_gesila.jpg',
            title: '哥斯拉2',
            type: '魔幻',
            isNew: true,
            isHot: true
          },
          {
            url: '/static/movies/shu_gesila.jpg',
            title: '哥斯拉2',
            type: '魔幻',
            isNew: true,
            isHot: false
          },
          {
            url: '/static/movies/shu_gesila.jpg',
            title: '哥斯拉2',
            type: '警匪枪战',
            isNew: true,
            isHot: true
          }
        ],
      }
    },
    methods: {
      toggleCurrent(index) {
        this.$store.commit('changeCurrent', index)
        this.$store.commit('toggleTab', index)
        return true
      },
      goSearch() {
        uni.navigateTo({
          url: '../search/search'
        })
      },
      change(e) {
        this.swiperCurrent = e.detail.current;
      },
      goNovel(index) {
        if(index === 0) {
          uni.navigateTo({
            url: '../novel/novel'
          })
        }
      },
      
    }
  }
</script>

<style lang="less" scoped>
  .movie-container {
    .swiper-view{
      // padding: 15rpx;
      .swiper{
        height: 360rpx;
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
      padding: 18rpx;
      margin-bottom: 10rpx;
      display: flex;
      justify-content: space-around;
      background-color: #fff;
      box-shadow: 0 1px 3px #ddd;

      .option-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 26rpx;
      }
    }
    
    .phb-c{
      margin-bottom: 10rpx;
      .phb-title-more{
        padding: 10rpx 20rpx;
        display: flex;
        justify-content: space-between;
        .phb-title{
          display: flex;
          align-items: center;
          >text{
            font-size: 30rpx;
            font-weight: bold;
          }
          .phb-title-tag{
            width: 50rpx;
            height: 30rpx;
            margin-left: 10rpx;
          }
        }
        .phb-more{
          display: flex;
          align-items: center;
          >text{
            font-size: 24rpx;
          }
        }
      }
      .phb-movies{
        display: flex;
        overflow: auto;
        .phb-movie-item{
          padding: 20rpx;
          margin: 8rpx;
          background-color: #fff;
          border-radius: 10rpx;
          box-shadow: 0 0 3px #ddd;
          position: relative;
          .phb-movie-item-image{
            width: 200rpx;
            height: 280rpx;
          }
          .phb-movie-item-title{
            display: flex;
            justify-content: space-between;
            >text{
              font-size: 24rpx;
              font-weight: bold;
            }
            >view{
              color: #999;
              padding: 0 8rpx;
              border-radius: 10rpx;
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
