<template>
  <div class="goods">
    <img
      loading="lazy"
      class="goods-img"
      :src="imageUrl(item.goodsRepImgPathNm)"
      alt=""
    />
    <div class="goods-like" @click="handleLike()">
      <img src="https://fo.x2bee.com/images/icons/like.svg" alt="" />
    </div>
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
      type: Object,
    },
  },
  methods: {
    imageUrl(src) {
      if (src.endsWith(".png") || src.endsWith(".jpg")) {
        return `https://img-stg.x2bee.com/${src}`;
      } else if (src.endsWith(".svg")) {
        return `https://fo.x2bee.com/${src}`;
      }
    },
    handleLike() {
      alert("좋아요!!");
    },
  },
};
</script>

<style lang="scss" scoped>
.goods {
  width: 282px;
  font-size: 12px;
  cursor: pointer;

  .goods-like {
    display: flex;
    justify-content: end;
    padding: 6px 0;
  }

  .goods-img {
    width: 282px;
    height: 282px;
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
