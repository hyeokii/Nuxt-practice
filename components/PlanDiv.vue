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

    <div>
      <GoodsSortSelectBox
        :sortType="sortType"
        @updateGoodsList="updateGoodsList"
      />
      <div class="goodsListContainer">
        <ItemCard
          v-for="(goods, idx) in newGoodsList"
          :key="`${idx}${goods.goodsNo}`"
          :goods="goods"
        ></ItemCard>
      </div>
    </div>
  </div>
</template>

<script>
import apiData from "../api/apiData";

export default {
  data() {
    return {
      sortType: "10",
      newGoodsList: [...this.goodsList],
    };
  },
  props: {
    planDiv: { type: Object, required: true },
    goodsList: { type: Array },
    mkdpNo: { type: String, required: true },
  },
  methods: {
    async updateGoodsList(sortType) {
      try {
        const responseData = await apiData.fetchSortGoods(
          this.mkdpNo,
          this.planDiv.divobjNo,
          sortType
        );
        this.newGoodsList = responseData.data[0].goodsList;
        // this.newGoodsList = responseData.data.payload.planInfoList;
      } catch (error) {
        console.error("error", error);
      }
    },
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
