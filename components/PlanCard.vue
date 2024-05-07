<template>
  <div v-if="plan" class="planCardContainer">
    <img
      :src="`https://img-stg.x2bee.com/${plan.imageList[0].bnrImgPathNm}`"
      v-if="plan.imageList[0]"
      class="cardImg"
      loading="lazy"
      alt="img"
    />
    <div class="noImg" v-else>사진이 없습니다.</div>
    <div class="planCardContent">
      <span class="planTitle">{{ plan.mkdpNm }}</span>
      <span class="planCont">{{ plan.introConts }}</span>
      <span class="planPeriod"
        >{{ plan.startDate.split(" ")[0] }} ~
        {{ plan.endDate.split(" ")[0] }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plan: Object,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.cardImg,
.noImg {
  width: 382px;
  height: 382px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.planCardContainer {
  margin-bottom: 30px;
  width: 382px;
}

.planCardContent {
  display: flex;
  flex-direction: column;
  width: 382px;

  .planTitle {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .planCont {
    font-size: 14px;
    margin-bottom: 3px;
  }

  .planPeriod {
    color: gray;
    font-size: 12px;
  }
}
</style>
