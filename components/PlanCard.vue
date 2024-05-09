<template>
  <div v-if="plan" class="planCardContainer">
    <img
      :src="`https://img-stg.x2bee.com/${plan.imageList[0].bnrImgPathNm}`"
      v-if="plan.imageList && plan.imageList[0]"
      class="cardImg"
      loading="lazy"
      alt="img"
    />
    <div class="noImg" v-else>이미지가 없습니다.</div>
    <div class="planCardContent">
      <div class="btnContainer">
        <button class="likeBtn">&#9829;</button>
        <button class="shareBtn">공유</button>
      </div>
      <span class="planTitle">{{ plan.mkdpNm }}</span>
      <span class="planCont">{{ plan.introConts }}</span>
      <span v-if="plan.startDate" class="planPeriod"
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

  .btnContainer {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 5px;

    button {
      font-size: 12px;
    }

    .likeBtn {
      margin-right: 5px;
      font-size: 16px;

      &:active,
      &:focus {
        color: red;
      }
    }
  }

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
