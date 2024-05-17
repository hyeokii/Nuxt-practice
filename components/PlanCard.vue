<template>
  <div v-if="plan" :class="['planCardContainer', type]">
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
        <span class="likeBtn" @click="setIsLike(plan.mkdpNo)"
          ><img
            src="../public/like_full.png"
            alt="likeImg"
            v-if="isLike(plan.mkdpNo)" /><img
            v-else
            src="../public/like.png"
            alt="likeImg"
        /></span>
        <span class="shareBtn"
          ><img src="../public/share.png" alt="shareImg"
        /></span>
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
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["planFavoriteData"]),
  },
  props: {
    plan: { type: Object, required: true },
    type: { type: String },
  },
  methods: {
    setIsLike(mkdpNo) {
      if (this.isLike(mkdpNo)) {
        const id = this.planFavoriteData.filter(
          (plan) => plan.mkdpNo === mkdpNo
        )[0].id;
        this.$store.dispatch("deletePlanFavorite", id);
      } else {
        this.$store.dispatch("addPlanFavorite", {
          id: mkdpNo,
          loginId: "ccomo07071",
          mkdpNo: mkdpNo,
        });
      }
    },
    isLike(mkdpNo) {
      const arr = this.planFavoriteData.map((plan) => plan.mkdpNo);
      return arr.includes(mkdpNo);
    },
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

.main .cardImg,
.main .noImg {
  width: 380px;
  height: 380px;
}

.main .planCardContainer {
  width: 380px;
}

.main .planCardContent {
  width: 380px;
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

    .likeBtn {
      margin-right: 5px;
      font-size: 16px;
      cursor: pointer;
    }

    .shareBtn {
      cursor: pointer;
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
