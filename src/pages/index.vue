<template>
  <view class="index-container">
    <map :latitude="latitude" :longitude="longitude" :markers="covers" />
    <!-- 右侧栏 -->
    <rightSilder />
    <!-- 底部信息栏 -->
    <infoBar />
  </view>
</template>

<script>
import rightSilder from './components/index/rightSilder';
import infoBar from './components/index/infoBar';

export default {
    components: {
        rightSilder,
        infoBar
    },
    data() {
        return {
            latitude: 30.6574108500,
            longitude: 104.0657830200,
            covers: [{
                latitude: 30.6574108500,
                longitude: 104.0657830200
                // iconPath: '../../../static/location.png'
            }]
        };
    }
};
</script>

<style lang="scss" scoped>
  .index-container {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    > map {
      width: 100vw;
      height: 100vh;
    }

  }
</style>
