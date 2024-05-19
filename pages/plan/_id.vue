<template>
  <div class="planDetail-wrap">
    <h1 class="planDetail-title">기획전</h1>
    <div class="plan-like">
      <div @click="handleLike(res.mkdpNo)">
        <img :src="likeIconSrc" alt="like" />
      </div>
      <div @click="handleShare()">
        <img src="https://fo.x2bee.com/images/icons/ico_share02.svg" alt="" />
      </div>
    </div>

    <div
      v-if="res.titleHtmlPc"
      v-html="res.titleHtmlPc"
      class="planDetail-main"
    ></div>

    <SelectScroll :data="res.planDivObjList" @getRef="scrollRef"></SelectScroll>

    <PlanDetail
      v-for="item in res.planDivObjList"
      :key="item.divobjNo"
      :data="item"
      :ref="item.divobjNm"
    ></PlanDetail>

    <hr class="divider" />

    <recentPlanList :data="res"></recentPlanList>
  </div>
</template>

<script>
import { getPlanDetail } from "../../api";
import PlanDetail from "../../components/PlanDetail.vue";
import SelectScroll from "../../components/SelectScroll.vue";
import RecentPlanList from "../../components/RecentPlanList.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    PlanDetail,
    SelectScroll,
    RecentPlanList,
  },
  computed: {
    ...mapState(["planFavorite"]),
    isFavorite() {
      return this.planFavorite.some((plan) => plan.mkdpNo === this.res.mkdpNo);
    },
    likeIconSrc() {
      return this.isFavorite
        ? "https://fo.x2bee.com/images/icons/like_active.svg"
        : "https://fo.x2bee.com/images/icons/like.svg";
    },
  },
  async asyncData({ params }) {
    try {
      const id = params.id;
      const res = await getPlanDetail(id);
      return { res };
    } catch (error) {
      console.log("데이터 불러오기 실패", error);
    }
  },
  methods: {
    ...mapActions(["addPlanFavorite", "deletePlanFavorite"]),
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
    scrollRef(value) {
      this.$refs[value][0].$el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.planDetail-wrap {
  width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
  .planDetail-title {
    margin-bottom: 10px;
    text-align: center;
    font-size: 30px;
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
  .planDetail-main {
    margin: 0 auto;
    padding-bottom: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .planDetail-main::v-deep img {
    width: 100%;
  }

  .divider {
    margin: 2.5rem 0 1.25rem;
    height: 0.25rem;
    border: none;
    background-color: rgb(233 236 239);
  }
}
</style>
