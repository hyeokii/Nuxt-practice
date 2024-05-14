<template>
  <div class="section-wrap">
    <div class="bnr-wrap" v-if="data.bnrImgPathNm">
      <img loading="lazy" :src="imageUrl(data.bnrImgPathNm)" alt="" />
    </div>
    <div class="bnr-wrap" v-else-if="data.htmlFileCont">
      <div v-html="data.htmlFileCont"></div>
    </div>
    <div class="bnr-wrap" v-if="data.textDivobjNm">
      {{ data.textDivobjNm }}
    </div>

    <DetailSelectbox @planDetail-event="fetchGoodsList"></DetailSelectbox>

    <GoodsList :data="goodsList"></GoodsList>
    <div v-if="data.cpnBnrImgPathNm">
      <img :src="imageUrl(data.cpnBnrImgPathNm)" alt="" />
    </div>
  </div>
</template>

<script>
import GoodsList from "./GoodsList.vue";
import DetailSelectbox from "./DetailSelectbox.vue";
import { getDivobjNo } from "../api";

export default {
  components: {
    GoodsList,
    DetailSelectbox,
  },
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      goodsList: Array,
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
}
.section-wrap:last-child {
  padding-bottom: 0;
  background-color: red;
}

@media ($desktop) {
  .section-wrap {
    width: 1200px;
  }
}
</style>
