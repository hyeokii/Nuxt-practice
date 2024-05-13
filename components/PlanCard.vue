<template>
  <div @click="moveDetail(plan.mkdpNo)">
    <img
      v-if="isView"
      class="plan-img"
      loading="lazy"
      :src="imageUrl(image.bnrImgPathNm)"
      :alt="image.mkdpNo"
    />
    <div class="plan-like">
      <div @click="handleLike()">
        <img src="https://fo.x2bee.com/images/icons/like.svg" alt="" />
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
export default {
  props: {
    plan: {
      type: Object,
    },
  },
  computed: {
    isView() {
      return this.image?.bnrImgPathNm;
    },
    image() {
      return this.plan?.imageList?.at(0);
    },
  },
  methods: {
    imageUrl(src) {
      return `https://img-stg.x2bee.com/${src}`;
    },
    handleLike() {
      alert("좋아요!!");
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
  height: 384px;
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
</style>
