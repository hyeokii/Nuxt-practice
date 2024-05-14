<template>
  <div class="planDivContainer">
    <!-- 제목 -->
    <div>
      <span v-if="planDiv.textDivobjNm">{{ planDiv.textDivobjNm }}</span>
    </div>

    <!-- 메인이미지 -->
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

    <!-- goods -->
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

    <!-- 쿠폰 -->
    <div class="cpnContainer" v-if="planDiv.cpnBnrImgPathNm">
      <img
        class="cpnImg"
        :src="`https://img-stg.x2bee.com/${planDiv.cpnBnrImgPathNm}`"
        @click="downloadCpn"
      />
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
    downloadCpn() {
      alert("선택한 쿠폰이 발급 완료 되었습니다.");
    },
  },
};
</script>

<style lang="scss" scoped>
.planDivContainer {
  margin-bottom: 6rem;
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

.cpnContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 3rem 0;

  .cpnImg {
    cursor: pointer;
  }
}
</style>
