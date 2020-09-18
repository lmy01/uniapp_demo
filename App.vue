<!-- 这里不可以写template组件，否则会解析失败，导致页面空白 -->
<script>
  export default {
    onLaunch: function() {
      console.log('App Launch')
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      console.log('App Hide')
    }
  }
</script>

<style lang="scss">
  @import "uview-ui/index.scss";
  page{
    color: #555;
    font-size: 28rpx;
    background: #f2f2f2;
  }
</style>
