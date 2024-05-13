<template>
  <div class="planDivContainer">
    <div>
      <span v-if="planDiv.textDivobjNm">{{ planDiv.textDivobjNm }}</span>
    </div>

    <div
      class="planDivHtml"
      v-if="planDiv.htmlFileCont"
      v-html="planDiv.htmlFileCont"
    ></div>
    <div v-if="planDiv.bnrImgPathNm">
      <img
        class="planDivImg"
        :src="`https://img-stg.x2bee.com/${planDiv.bnrImgPathNm}`"
        alt="img"
      />
    </div>

    <div class="goodsListContainer">
      <ItemCard
        v-for="(goods, idx) in planDiv.goodsList"
        :key="`${idx}${goods.goodsNo}`"
        :goods="goods"
      ></ItemCard>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    planDiv: { type: Object, required: true },
    goodsList: { type: Array },
  },
};
</script>

<style lang="scss" scoped>
.planDivContainer {
  border: 1px solid black;
}
.planDivHtml::v-deep {
  p {
    margin: 0;
  }
  img {
    width: 1240px;
  }
}

.planDivImg {
  width: 1240px;
}

.goodsListContainer {
  margin-top: 2rem;
  max-width: 1240px;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 40px;
}
</style>
