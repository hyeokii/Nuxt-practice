<template>
  <div class="plan-wrapper">
    <div class="plan-list">
      <div class="plan-product" v-for="plan in planList" :key="plan.mkdpNo">
        <img
          class="plan-img"
          loading="lazy"
          :src="imageUrl(plan.imageList[0].bnrImgPathNm)"
          :alt="plan.imageList[0].mkdpNo"
        />
        <p class="plan-title">{{ plan.mkdpNm }}</p>
        <p class="plan-content">{{ plan.introConts }}</p>
        <p class="plan-date">{{ plan.startDate }} ~ {{ plan.endDate }}</p>
      </div>
    </div>
    <button class="plan-more" @click="moreList">기획전 더 보기</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      group: "",
      pageNo: 1,
      pageSize: 9,
    };
  },

  computed: {
    ...mapState(["planList"]),
    showLoadMoreButton() {
      return this.$store.state.planList.payload.hasMore;
    },
  },
  methods: {
    async moreList() {
      await this.$store.dispatch("getMoreList");
    },
    imageUrl(src) {
      return `https://img-stg.x2bee.com/${src}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.plan-wrapper {
  margin: 0 auto;
  padding: 0 80px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .plan-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 60px;
    column-gap: 10px;

    .plan-product {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
      height: 100%;
      padding: 10px;

      .plan-img {
        width: 100%;
        height: 384px;
        object-fit: fill;
      }
      .plan-title {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 0;
      }
      .plan-content {
        font-size: 14px;
        width: 384px;
        margin-bottom: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .plan-date {
        font-size: 12px;
        color: #767676;
      }
    }
  }
  .plan-more {
    margin-top: 20px;
    width: 384px;
    height: 40px;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid gray;
  }
}

@media ($desktop) {
  .plan-wrapper {
    width: 1280px;
  }
}
</style>
