<template>
	<view class="container search-container">
    <view class="status_bar">
        <!-- 这里是状态栏 -->
    </view>
    <view class="search-header-view">
      <uni-icons type="arrowthinleft" size="24" color="#666" @click="backPrePage"></uni-icons>
      <uni-search-bar class="search-box" v-model="searchTitle" :radius="20" :maxlength="50" clearButton="auto" cancelButton="none" placeholder="请输入问题名称" @confirm="search"></uni-search-bar>
    </view>
    <view class="tuijian-view">
      <u-tabs-swiper class="tabs-c" ref="uTabs" :list="tabList" :current="current" @change="tabsChange" :is-scroll="true" active-color="#3CC51F"></u-tabs-swiper>
      <swiper class="swiper-c" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
        <swiper-item class="swiper-item" v-for="(item, index) in swiperList" :key="index">
          <view class="list-view">
            <view class="list-left-view">
              <view v-for="(item2, index2) in item.list" v-if="index2%2 === 0" :key="index2">
                <view :style="{color: '#aaa', width: '35rpx'}">{{index2+1 + "."}}</view>
                {{item2 + item2 + item2}}
              </view>
            </view>
            <view class="list-right-view">
              <view v-for="(item2, index2) in item.list" v-if="index2%2 === 1" :key="index2">
                <view :style="{color: '#aaa', width: '35rpx'}">{{index2+1 + "."}}</view>
                {{item2 + item2 + item2}}
              </view>
            </view>
          </view>
          <view :style="{marginTop: '16rpx'}">
            <text :style="{color: '#3CC51F'}">查看更多内容 >></text>
          </view>
        </swiper-item>
      </swiper>
    </view>
		
	</view>
</template>

<script>
	import {
	  uniIcons,
	  uniNavBar,
    uniSearchBar 
	} from '@dcloudio/uni-ui'
	export default {
	  components: {
	    uniIcons,
	    uniNavBar,
      uniSearchBar 
	  },
		data() {
			return {
				searchTitle: null,
        current: 0, // tabs组件的current值，表示当前活动的tab选项
        swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
        tabList: [
          {
            name: '热搜'
          },
          {
            name: '影视'
          },
          {
            name: '小说'
          },
          {
            name: '科学'
          },
          {
            name: '体育'
          },
          {
            name: '会员推荐'
          }
        ],
        swiperList: [
          {
            list: ['热搜1', '热搜2', '热搜1', '热搜2', '热搜1', '热搜2', '热搜1', '热搜2', '热搜1', '热搜2']
          },
          {
            list: ['影视1', '影视2', '影视1', '影视2', '影视1', '影视2', '影视1', '影视2', '影视1', '影视2']
          },
          {
            list: ['小说1', '小说2', '小说1', '小说2', '小说1', '小说2', '小说1', '小说2', '小说1', '小说2']
          },
          {
            list: ['科学1', '科学2', '科学1', '科学2', '科学1', '科学2', '科学1', '科学2', '科学1', '科学2']
          },
          {
            list: ['体育1', '体育2', '体育1', '体育2', '体育1', '体育2', '体育1', '体育2', '体育1', '体育2']
          },
          {
            list: ['会员推荐1', '会员推荐2', '会员推荐1', '会员推荐2', '会员推荐1', '会员推荐2', '会员推荐1', '会员推荐2', '会员推荐1', '会员推荐2',]
          }
        ],
			}
		},
		methods: {
      backPrePage() {
        uni.navigateBack()
      },
			search() {
        console.log(this.searchTitle)
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
        this.current = current;
      },
		}
	}
</script>

<style lang="less" scoped>
  .search-container{
    background-color: #fff;
    .search-header-view{
      display: flex;
      align-items: center;
      background-color: #fff;
      padding: 0 16rpx;
      .search-box{
        flex-grow: 1;
        /deep/ .uni-searchbar__box{
          height: 60rpx;
        }
      }
    }    
    
    .tuijian-view{
      text-align: center;
      .tabs-c{
        display: inline-block;
        width: auto;
        /deep/ .u-tabs-item{
          font-size: 28rpx !important;
        }
      }
      .swiper-c{
        min-height: 400rpx;
        .swiper-item{
          .list-view{
            display: flex;
            padding: 12rpx 40rpx;
            >view{
              width: 50%;
              flex-grow: 1;
              text-align: left;
              font-size: 26rpx;
              >view{
                padding: 12rpx;
                display: flex;
              }
            }
          }
        }
      }
    }
  }
</style>
