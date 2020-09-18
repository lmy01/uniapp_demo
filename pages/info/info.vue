<template>
	<view class="container info-container">
		<u-cell-group>
      <u-cell-item icon="camera" title="头像" :arrow="false">
        <u-avatar slot="right-icon" src="/static/icons/avater_boy.png" show-sex sex-bg-color="#99CC00"></u-avatar>
      </u-cell-item>
      <u-cell-item icon="account" title="昵称" value="隔壁王二"></u-cell-item>
      <u-cell-item icon="phone" title="手机号" value="15156464898"></u-cell-item>
      <u-cell-item icon="scan" title="二维码名片" value="" @click="goQrCode"></u-cell-item>
      <u-cell-item icon="more-circle" title="更多" value=""></u-cell-item>
    </u-cell-group>
    <u-gap height="30" bg-color="transparent"></u-gap>
    <u-cell-group>
      <u-cell-item icon="setting" title="设置"></u-cell-item>
      <u-cell-item icon="integral" title="关于我们" value="新版本"></u-cell-item>
    </u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        
			}
		},
		methods: {
			goQrCode() {
        uni.navigateTo({
          url: '../code/code'
        })
      }
		}
	}
</script>

<style lang="less" scoped>
  .u-cell{
    align-items: center;
  }
</style>
