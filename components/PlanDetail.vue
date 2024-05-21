<template>
  <div class="section-wrap">
    <div class="bnr-wrap" v-if="data.divobjGbCd === '20'">
      <img loading="lazy" :src="imageUrl(data.bnrImgPathNm)" alt="" />
    </div>
    <div class="bnr-wrap" v-else-if="data.divobjGbCd === '30'">
      <div v-html="data.htmlFileCont"></div>
    </div>
    <div class="bnr-wrap" v-else-if="data.divobjGbCd === '10'">
      {{ data.textDivobjNm }}
    </div>

    <Selectbox
      :options="detailSortOptionList"
      :sortOption="sortOption"
      @select-box="fetchGoodsList"
      class="detail-sort"
    ></Selectbox>

    <GoodsList :data="goodsList"></GoodsList>
    <div v-if="data.cpnBnrImgPathNm">
      <img :src="imageUrl(data.cpnBnrImgPathNm)" alt="" />
    </div>
  </div>
</template>

<script>
import GoodsList from "./GoodsList.vue";
import Selectbox from "./Selectbox.vue";
import { getDivobjNo } from "../api";

export default {
  components: {
    GoodsList,
    Selectbox,
  },
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      goodsList: Array,
      sortOption: "최신순",
      detailSortOptionList: {
        10: "최신순",
        20: "판매 많은순",
        30: "높은 가격순",
        40: "낮은 가격순",
        50: "상품평 많은순",
      },
    };
  },
  async fetch() {
    this.goodsList = this.data.goodsList;
  },
  methods: {
    async fetchGoodsList(key) {
      const id = this.$route.params.id;
      const divobjNo = this.data.divobjNo;
      const res = await getDivobjNo(id, key, divobjNo);
      this.goodsList = res.planDivObjList[0].goodsList;
    },

    imageUrl(src) {
      return `https://img-stg.x2bee.com/${src}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.section-wrap {
  margin: 0 auto;
  padding-bottom: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .bnr-wrap {
    width: 100%;
  }
  .bnr-wrap::v-deep img {
    display: block;
    width: 100%;
    margin-bottom: 20px;
  }
  .detail-sort {
    width: 100%;
    padding: 0;
  }
}

@media ($desktop) {
  .section-wrap {
    width: 1200px;
  }
}
</style>
