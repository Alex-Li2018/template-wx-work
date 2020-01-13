<template>
  <view class="right-sidler-container top-center">
    <block v-for="item in sortList" :key="item.id">
      <view class="sort-wrapper" 
            :class="activeItem === item.id ? 'active' : ''"
            @tap="changeActive(item.id)">
        <text class="mark">{{ item.mark }}</text>
        <text class="desc">{{ item.desc }}</text>
      </view>
    </block>
  </view>
</template>

<script>
export default {
    data() {
        return {
            activeItem: 0,
            sortList: [
                {
                    id: 0,
                    mark: '幼',
                    desc: '幼儿'
                },
                {
                    id: 1,
                    mark: '小',
                    desc: '小学'
                },
                {
                    id: 2,
                    mark: '中',
                    desc: '初中'
                }
            ]
        };
    },
    methods: {
        changeActive(id) {
            this.activeItem = id;
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../../static/styles/mixins.scss';

.right-sidler-container {
    width: 74rpx;
    height: 336rpx;
    background:rgba(255,255,255,1);
    box-shadow: 0rpx 2rpx 12rpx 0rpx rgba(11,96,210,0.2);
    border-radius: 37rpx;
    right: 24rpx;
    @include flexBox(space-around, center, column);
}
.sort-wrapper {
    flex: 1;
    width: 100%;
    @include flexBox(center, center, column);
    .mark {
        font-size: 35rpx;
    }
    .desc {
        height:36rpx;
        font-size: 26rpx;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color:#666666;
        line-height: 36rpx;
    }
}
.active {
    width: 74rpx;
    height: 112rpx;
    background:rgba(20,120,255,1);
    box-shadow: 0rpx 2rpx 12rpx 0rpx rgba(11,96,210,0.2);
    border-radius: 37rpx;
    .mark {
        color: #fff;    
    }
    .desc {
        color: #fff;
    }
}
</style>