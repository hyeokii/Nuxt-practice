<template>
  <div
    class="itemCardContainer"
    @click="routeToUrl(goods.goodsNo)"
    v-if="goods"
  >
    <img
      :src="`https://img-stg.x2bee.com/${goods.goodsRepImgPathNm}`"
      alt="productImg"
      class="productImg"
      v-if="goods.goodsRepImgPathNm"
    />
    <div class="likeBtnContainer">
      <span class="likeBtn"
        ><img src="../public/like.png" alt="likeImg"
      /></span>
    </div>
    <p class="productTitle">{{ goods.goodsNm }}</p>
    <span v-if="goods.dcRate !== 0" class="originPrice">{{
      goods.rcntSalePrc.toLocaleString("ko-KR", { maximumFractionDigits: 4 })
    }}</span>
    <div>
      <span v-if="goods.dcRate !== 0" class="salePer">{{ goods.dcRate }}%</span>
      <span class="salePrice">{{
        goods.salePrc.toLocaleString("ko-KR", { maximumFractionDigits: 4 })
      }}</span
      ><span class="priceUnit">원</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: Object,
  },
  methods: {
    routeToUrl(goodsNo) {
      alert(`goods/detail/${goodsNo}로 이동`);
    },
  },
};
</script>

<style lang="scss" scoped>
.itemCardContainer {
  width: 280px;
  margin-bottom: 2rem;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 350px;
  }
}

.productImg {
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-bottom: 0.5rem;
  top: 0;

  @media (max-width: 1200px) {
    width: 350px;
    height: 350px;
  }
}

.likeBtnContainer {
  width: 100%;
  text-align: right;
}

.productTitle {
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 500;
}

.originPrice {
  color: rgb(101, 101, 101);
  text-decoration: line-through;
  font-size: 0.8rem;
}

.salePer {
  color: red;
  font-weight: 600;
}

.priceUnit {
  font-size: 12px;
}

.salePrice {
  font-weight: 700;
}
</style>
