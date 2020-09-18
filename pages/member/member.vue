<template>
	<view class="container member-container" :style="{height: height_home + 'px'}">
    <view class="status_bar">
        <!-- 这里是状态栏 -->
    </view>
    <!-- 个人信息和搜索栏 -->
		<view class="avatar-search-c">
		  <view class="avatar">
		    <image src="/static/icons/avatar_boy.png" class="image_avatar"></image>
		    <view class="username-container">
		      <text class="username">隔壁王二</text>
		      <view class="subtitle">
		        绿选会员还有3天过期
		      </view>
		    </view>
		  </view>
		  <view class="info">
		    <uni-icons type="search" size="24" color="#666" @click="goSearch"></uni-icons>
		  </view>
		</view>
    <view class="tabs-swiper-c">
      <u-tabs-swiper class="tabs-c" ref="uTabs" :list="tabsList" :current="tabsCurrent" @change="tabsChange" :is-scroll="true" active-color="#3CC51F"></u-tabs-swiper>
    
      <swiper class="swiper-c" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
        <swiper-item class="swiper-item" v-for="(item, index) in swiperList" :key="index">
          <scroll-view scroll-y="true">
            <view>
              <image class="header-image" :src="item.url"></image>
            </view>
            <view class="options-c">
              <view class="option-item" v-for="(item2, index2) in optionList" :key="index2">
                <image :src="item2.url" mode=""></image>
                <text>{{item2.title}}</text>
              </view>
            </view>
            <view class="novel-hot-c">
              <view class="novel-hot-title-more">
                <view class="novel-hot-title">
                  <text>最热小说</text>
                  <image src="/static/movies/hot.png" class="novel-hot-title-tag"></image>
                </view>
                <view class="novel-hot-more">
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
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
    <!-- 底部tabbar和发布弹框popup -->
    <tabbar :current="3"></tabbar>
  </view>
</template>

<script>
	import {uniIcons} from '@dcloudio/uni-ui'
	export default {
	  components: {
	    uniIcons
	  },
    onLoad() {
      // console.log("-----member.page-----")
    },
		data() {
			return {
        height_home: 0,
        tabsCurrent: 0, // tabs组件的current值，表示当前活动的tab选项
        swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
        tabsList: [
          {
            name: '待收货1'
          },
          {
            name: '待付款2'
          },
          {
            name: '待评价3'
          },
          {
            name: '待收货44'
          },
          {
            name: '待付款55'
          },
          {
            name: '待评价666'
          },
          {
            name: '待付款7'
          }
        ],
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
          },
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
          },
          {
            url: '/static/movies/heng_1917.png',
            title: '电影1917 最好看的电影'
          }
        ],
        optionList: [
          {
            title: '会员福利',
            url: '/static/icons/huangguan.png'
          },
          {
            title: '每日上新',
            url: '/static/icons/new.png'
          },
          {
            title: '榜单',
            url: '/static/icons/phb.png'
          },
          {
            title: '小说',
            url: '/static/icons/book.png'
          },
          {
            title: '分类',
            url: '/static/icons/types.png'
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
		onShow() {
      // console.log(uni.getSystemInfoSync());
      uni.getSystemInfo({
        success: res =>{
          // console.log(res)
          this.height_home = res.windowHeight
        }
      })
      
		},
		methods: {
      goSearch() {
        uni.navigateTo({
          url: '../search/search'
        })
      },
      // tabs通知swiper切换
      tabsChange(index) {
        // console.log(index)
        this.swiperCurrent = index;
      },
      // swiper-item左右移动，通知tabs的滑块跟随移动
      transition(e) {
        let dx = e.detail.dx;
        this.$refs.uTabs.setDx(dx);
      },
      // 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
      // swiper滑动结束，分别设置tabs和swiper的状态
      animationfinish(e) {
        let current = e.detail.current;
        this.$refs.uTabs.setFinishCurrent(current);
        this.swiperCurrent = current;
        this.tabsCurrent = current;
      },
      
		}
	}
</script>

<style lang="less" scoped>
	.member-container{
    display: flex;
    flex-direction: column;
    .status_bar{
      background-color: #fff;
    }
    
    .avatar-search-c {
      padding: 20rpx 20rpx 10rpx;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .avatar {
        display: flex;
        align-items: center;
        .image_avatar {
          width: 80rpx;
          height: 80rpx;
          border-radius: 80rpx;
          margin-right: 15rpx;
        }
        .username-container{
          .username{
            color: #3CC51F;
            font-size: 30rpx;
            font-weight: bold;
          }
          .subtitle{
            color: #aaa;
            font-size: 12rpx;
            border-radius: 6rpx;
          }
        }
        
      }
      .info{
        display: flex;
        align-items: center;
      }
    }
  
    .tabs-swiper-c{
      height: 1px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      .tabs-c{
        padding-bottom: 15rpx;
        /deep/ .u-tabs-item{
          font-size: 26rpx !important;
        }
      }
      .swiper-c{
        // 必须要设置高度
        height: 1px;
        flex-grow: 1;
        .swiper-item{
          scroll-view{
            // 必须要设置高度
            height: 100%;
          }
          .header-image{
            width: 100%;
          }
          .options-c {
            padding: 15rpx;
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
              image{
                width: 40rpx;
                height: 40rpx;
              }
            }
          }
        }
      }      
      
      .novel-hot-c{
        margin: 10rpx 0;
        .novel-hot-title-more{
          padding: 5rpx 15rpx;
          display: flex;
          justify-content: space-between;
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
          .novel-hot-more{
            display: flex;
            align-items: center;
            >text{
              font-size: 24rpx;
            }
          }
        }
        .novel-hot-novels{
          .novel-hot-item{
            padding: 20rpx;
            margin: 15rpx;
            background-color: #fff;
            border-radius: 5rpx;
            box-shadow: 0 0 3px #ddd;
            display: flex;
            .novel-hot-item-image{
              width: 180rpx;
              height: 290rpx;
              margin-right: 15rpx;
            }
            .novel-hot-item-title-content{
              width: 1rpx;
              flex-grow: 1;
              .novel-hot-item-title{
                display: flex;
                justify-content: space-between;
                .novel-title{
                  font-size: 28rpx;
                  font-weight: bold;
                }
                .novel-star{
                  font-size: 26rpx;
                }
              }
              .novel-hot-item-author-type{
                display: flex;
                justify-content: space-between;
                padding: 10rpx 0;
                .novel-author{
                  color: #999;
                  font-size: 26rpx;
                }
                view{
                  color: #999;
                  padding: 0 10rpx;
                  border-radius: 10rpx;
                  background-color: #f2f2f2;
                  display: flex;
                  align-items: center;
                  text{
                    font-size: 22rpx;
                  }
                }
              }
              .novel-hot-item-content{
                font-size: 26rpx;
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
      
      
    }
  }
</style>

