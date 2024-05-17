<template>
  <div>
    <img
      v-if="isView"
      class="plan-img"
      loading="lazy"
      :src="imageUrl(image.bnrImgPathNm)"
      :alt="image.mkdpNo"
      @click="moveDetail(plan.mkdpNo)"
    />
    <div class="plan-like">
      <div @click="handleLike(plan.mkdpNo)">
        <img :src="likeIconSrc" alt="like" />
      </div>
      <div @click="handleShare()">
        <img src="https://fo.x2bee.com/images/icons/ico_share02.svg" alt="" />
      </div>
    </div>
    <p class="plan-title">{{ plan.mkdpNm }}</p>
    <p class="plan-content">{{ plan.introConts }}</p>
    <p class="plan-date">{{ plan.startDate }} ~ {{ plan.endDate }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    plan: {
      type: Object,
    },
  },
  computed: {
    ...mapState(["planFavorite"]),
    isView() {
      return this.image?.bnrImgPathNm;
    },
    image() {
      return this.plan?.imageList?.at(0);
    },
    isFavorite() {
      return this.planFavorite.some((plan) => plan.mkdpNo === this.plan.mkdpNo);
    },
    likeIconSrc() {
      return this.isFavorite
        ? "https://fo.x2bee.com/images/icons/like_active.svg"
        : "https://fo.x2bee.com/images/icons/like.svg";
    },
  },
  methods: {
    ...mapActions(["addPlanFavorite", "deletePlanFavorite"]),
    imageUrl(src) {
      return `https://img-stg.x2bee.com/${src}`;
    },
    async handleLike(id) {
      if (this.isFavorite) {
        await this.deletePlanFavorite(id);
      } else {
        await this.addPlanFavorite(id);
      }
    },
    handleShare() {
      alert("공유!!");
    },
    moveDetail(id) {
      this.$router.push(`plan/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.plan-img {
  width: 100%;
  object-fit: fill;
}
.plan-like {
  display: flex;
  justify-content: end;
  gap: 12px;
  padding-top: 4px;
  div {
    cursor: pointer;
  }
}
.plan-title {
  font-size: 100%;
  font-weight: bold;
  margin-bottom: 4px;
}
.plan-content {
  font-size: 100%;
  width: 100%;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.plan-date {
  font-size: 12px;
  color: #767676;
}
</style>
