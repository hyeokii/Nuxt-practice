<template>
  <div v-if="plan" class="planCardContainer">
    <NuxtLink :to="`/plan/${plan.mkdpNo}`">
      <img
        :src="`https://img-stg.x2bee.com/${plan.imageList[0].bnrImgPathNm}`"
        v-if="plan.imageList && plan.imageList[0]"
        class="cardImg"
        loading="lazy"
        alt="img"
      />
      <div class="noImg" v-else>이미지가 없습니다.</div>
    </NuxtLink>
    <div class="planCardContent">
      <div class="btnContainer">
        <button class="likeBtn">&#9829;</button>
        <button class="shareBtn">공유</button>
      </div>
      <NuxtLink :to="`/plan/${plan.mkdpNo}`">
        <div class="planTitle">{{ plan.mkdpNm }}</div>
        <div class="planCont">{{ plan.introConts }}</div>
        <div class="planPeriod">
          {{ plan.startDate.split(" ")[0] }} ~ {{ plan.endDate.split(" ")[0] }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plan: { type: Object, required: true },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.cardImg,
.noImg {
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.planCardContainer {
  margin-bottom: 30px;
  width: 280px;

  a {
    text-decoration-line: none;
    color: black;
  }
}

.planCardContent {
  display: flex;
  flex-direction: column;
  width: 280px;

  .btnContainer {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 5px;
    font-weight: 500;

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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .planCont {
    font-size: 14px;
    margin-bottom: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
  }

  .planPeriod {
    color: gray;
    font-size: 12px;
  }
}
</style>
