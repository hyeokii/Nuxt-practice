<template>
  <div class="goods" @click="handleAlert(item.goodsNo)">
    <img class="goods-img" :src="imageUrl(item.goodsRepImgPathNm)" />
    <div :class="{ 'goods-des': true, 'no-rate': item.dcRate === 0 }">
      <div class="goods-name">{{ item.goodsNm }}</div>
      <div class="goods-price">{{ item.rcntSalePrc }}<span>원</span></div>
      <span v-if="item.dcRate" class="goods-rate">{{ item.dcRate }}%</span>
      <span v-if="item.dcRate" class="goods-saleprice">
        {{ item.salePrc }}<span>원</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      Object,
    },
  },
  methods: {
    imageUrl(src) {
      return `https://img-stg.x2bee.com/${src}`;
    },
    handleAlert(src) {
      alert(`${src}로 이동`);
    },
  },
};
</script>

<style lang="scss" scoped>
.goods {
  width: 282px;
  font-size: 12px;
  cursor: pointer;

  .goods-img {
    width: 282px;
    height: 282px;
    margin: 10px 0;
  }

  .goods-des {
    .goods-name {
      font-size: 14px;
    }
    .goods-price {
      text-decoration: line-through;
    }

    .goods-rate {
      font-size: 14px;
      color: red;
      font-weight: bold;
    }
    .goods-saleprice {
      font-size: 14px;
      font-weight: bold;
      span {
        font-weight: normal;
      }
    }
  }
  .goods-des.no-rate {
    .goods-name {
      font-size: 14px;
    }
    .goods-price {
      text-decoration: none;
      font-size: 14px;
      font-weight: bold;
      span {
        font-weight: normal;
      }
    }
  }
}
</style>
