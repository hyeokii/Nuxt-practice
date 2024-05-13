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
    <GoodsList :data="data.goodsList"></GoodsList>
    <div v-if="data.cpnBnrImgPathNm">
      <img :src="imageUrl(data.cpnBnrImgPathNm)" alt="" />
    </div>
  </div>
</template>

<script>
import GoodsList from "./GoodsList.vue";

export default {
  components: {
    GoodsList,
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
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

@media ($desktop) {
  .section-wrap {
    width: 1200px;
  }
}
</style>
