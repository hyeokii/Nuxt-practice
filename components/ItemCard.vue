<template>
  <div class="itemCardContainer" v-if="goods">
    <div class="soldOut" v-if="goods.saleStatCd === '20'">품절</div>
    <img
      :src="`https://img-stg.x2bee.com/${goods.goodsRepImgPathNm}`"
      alt="productImg"
      class="productImg"
      v-if="goods.goodsRepImgPathNm"
      @click="routeToUrl(goods.goodsNo)"
    />
    <div class="likeBtnContainer">
      <span class="likeBtn" @click="setIsLike"
        ><img src="../public/like_full.png" alt="likeImg" v-if="isLike" /><img
          v-else
          src="../public/like.png"
          alt="likeImg"
      /></span>
    </div>
    <p class="productTitle" @click="routeToUrl(goods.goodsNo)">
      {{ goods.goodsNm }}
    </p>
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
    setIsLike() {
      this.isLike = !this.isLike;
    },
  },
  data() {
    return {
      isLike: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.itemCardContainer {
  width: 280px;
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;

  @media (max-width: 1200px) {
    width: 350px;
  }
}

.soldOut {
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 20;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.productImg {
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-bottom: 0.5rem;
  top: 0;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 350px;
    height: 350px;
  }
}

.likeBtnContainer {
  width: 100%;
  text-align: right;

  .likeBtn {
    cursor: pointer;
  }
}

.productTitle {
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
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
