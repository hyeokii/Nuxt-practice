<template>
  <div class="itemCardContainer" v-if="goods">
    <div
      class="soldOut"
      v-if="goods.saleStatCd === '20'"
      @click="routeToUrl(goods.goodsNo)"
    >
      품절
    </div>
    <img
      :src="getImgSrc(goods.goodsRepImgPathNm)"
      alt="productImg"
      class="productImg"
      v-if="goods.goodsRepImgPathNm"
      @click="routeToUrl(goods.goodsNo)"
    />
    <div class="likeBtnContainer">
      <span class="likeBtn" @click="setIsLike(goods.goodsNo)"
        ><img
          src="../public/like_full.png"
          alt="likeImg"
          v-if="isLike(goods.goodsNo)" /><img
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
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["goodsFavoriteData"]),
  },

  props: {
    goods: Object,
  },
  methods: {
    routeToUrl(goodsNo) {
      alert(`goods/detail/${goodsNo}로 이동`);
    },
    setIsLike(goodsNo) {
      if (this.isLike(goodsNo)) {
        const obj = this.goodsFavoriteData.find(
          (goods) => goods.goodsNo === goodsNo
        );
        const id = obj.id;
        this.$store.dispatch("deleteGoodsFavorite", id);
      } else {
        this.$store.dispatch("addGoodsFavorite", {
          id: goodsNo,
          loginId: "ccomo07071",
          goodsNo: goodsNo,
        });
      }
    },
    isLike(goodsNo) {
      const arr = this.goodsFavoriteData.map((goods) => goods.goodsNo);
      return arr.includes(goodsNo);
    },
    getImgSrc(imgPath) {
      if (imgPath.endsWith(".svg")) {
        return `https://fo.x2bee.com/${imgPath}`;
      } else {
        return `https://img-stg.x2bee.com/${imgPath}`;
      }
    },
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
  cursor: pointer;
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
