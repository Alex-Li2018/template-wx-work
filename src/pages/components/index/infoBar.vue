<template>
  <view class="info-bar-container">
    <view class="search-bar flex_layout">
      <image class="img" src="http://imgcdn.huanjutang.com/assets/img/20200113/5e1c358722ace.png" mode="scaleToFill" />
      <text class="txt">搜小区、搜学校</text>
    </view>
    <view class="info-list" />
  </view>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {

    }
};
</script>

<style lang="scss" scoped>

.info-bar-container {
    position: absolute;
    bottom: 0;
    .search-bar {
        width: 446rpx;
        height: 74rpx;
        background:rgba(255,255,255,1);
        box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0,0,0,0.1);
        border-radius: 44rpx;
        margin: 0 0 20rpx 24rpx;
        padding-left: 24rpx;
        .img {
            width: 40rpx;
            height: 40rpx;
        }
        .txt {
            height: 42rpx;
            font-size: 30rpx;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color:rgba(204,204,204,1);
            line-height: 42rpx;
            margin-left: 8rpx;
        }
    }
    .info-list {
        width: 750rpx;
        height: 168rpx;
        background:rgba(255,255,255,1);
        box-shadow: 0rpx -2rpx 4rpx 0rpx rgba(0,0,0,0.1);
        border-radius: 32rpx 32rpx 12rpx 12rpx;
    }
}
</style>