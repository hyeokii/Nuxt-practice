<template>
  <div class="itemCardContainer" @click="routeToUrl(product.goodsNo)">
    <img
      :src="`https://img-stg.x2bee.com/${product.goodsRepImgPathNm}`"
      alt="productImg"
      class="productImg"
    />
    <p class="productTitle">{{ product.goodsNm }}</p>
    <span v-if="product.dcRate !== 0" class="originPrice">{{
      product.rcntSalePrc.toLocaleString("ko-KR", { maximumFractionDigits: 4 })
    }}</span>
    <div>
      <span v-if="product.dcRate !== 0" class="salePer"
        >{{ product.dcRate }}%</span
      >
      <span class="salePrice">{{
        product.salePrc.toLocaleString("ko-KR", { maximumFractionDigits: 4 })
      }}</span
      ><span class="priceUnit">원</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
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
