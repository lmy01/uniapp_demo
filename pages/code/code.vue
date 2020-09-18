<template xlang="wxml">
	<view class="container code-container" :style="{height: height_home + 'px'}">
    <view class="inner-c">
      <view class="avatar-name-c">
        <u-avatar size="120" src="/static/icons/avater_boy.png" show-sex sex-bg-color="#99CC00"></u-avatar>
        <text>隔壁王二</text>
      </view>
      <view class="qrimg" @click="saveQrcode">
        <tki-qrcode cid="qrcode" ref="qrcode" :val="val" :size="size" :unit="unit" :background="background" :foreground="foreground" :pdground="pdground" :lv="lv" :onval="onval" :loadMake="loadMake" :usingComponents="true" @result="qrR" />
      </view>
      <view class="tips">
        扫一扫二维码图案，可加我好友
      </view>
      <!-- <view class="uni-padding-wrap">
      	<view class="btns">
      		<button type="primary" @tap="creatQrcode">生成二维码</button>
      		<button type="primary" @tap="saveQrcode">保存到图库</button>
      	</view>
      </view> -->
    </view>
	</view>
</template>
<script>
import tkiQrcode from '../../components/qrcode.vue'
export default {
	components: {
		tkiQrcode
	},
	onLoad() {
    
  },
  onShow() {
    // console.log(uni.getSystemInfoSync());
    uni.getSystemInfo({
      success: res =>{
        // console.log(res)
        this.height_home = res.windowHeight
      }
    })
    this.creatQrcode()
    
  },
	data() {
		return {
      height_home: 0,
			val: '隔壁王二', // 要生成的二维码值
			size: 400, // 二维码大小
			unit: 'upx', // 单位
			background: '#555', // 背景色
			foreground: '#fff', // 前景色
			pdground: '#32dbc6', // 角标色
			lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
			onval: false, // val值变化时自动重新生成二维码
			loadMake: true, // 组件加载完成后自动生成二维码
			src: '' // 二维码生成后的图片地址或base64
		}
	},
	methods: {
		creatQrcode() {
			this.$refs.qrcode._makeCode()
		},
		saveQrcode() {
			this.$refs.qrcode._saveCode()
		},
		qrR(res) {
			this.src = res
		},
  },
}
</script>

<style lang="less" scoped>
.code-container {
	display: flex;
  justify-content: center;
  align-items: center;
	width: 100%;
  .inner-c{
    padding: 60rpx;
    width: 90%;
    background-color: #fff;
    .avatar-name-c{
      margin-bottom: 50rpx;
      display: flex;
      align-items: center;
      font-size: 34rpx;
      font-weight: bold;
      .u-avatar{
        margin-right: 20rpx;
      }
    }
    .qrimg {
    	display: flex;
    	justify-content: center;
      align-items: center;
    }
    .tips{
      margin-top: 50rpx;
      color: #aaa;
      text-align: center;
    }
    .btns {
    	display: flex;
    	flex-direction: column;
    	width: 100%;
    }
    button {
    	width: 100%;
    	margin-top: 10upx;
    }
  }
  
}
</style>