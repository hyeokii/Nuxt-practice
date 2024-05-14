<template>
  <div class="planDetail-wrap">
    <h1 class="planDetail-title">기획전</h1>
    <div class="plan-like">
      <div @click="handleLike()">
        <img src="https://fo.x2bee.com/images/icons/like.svg" alt="" />
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

    <recentPlanList :data="res.recentPlanList"></recentPlanList>
    <div v-html="res.footerContents"></div>
  </div>
</template>

<script>
import { getPlanDetail } from "../../api";
import PlanDetail from "../../components/PlanDetail.vue";
import SelectScroll from "../../components/SelectScroll.vue";
import RecentPlanList from "../../components/RecentPlanList.vue";

export default {
  components: {
    PlanDetail,
    SelectScroll,
    RecentPlanList,
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
    handleLike() {
      alert("좋아요!!");
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
  height: 100%;
  margin: 0 auto;
  padding-top: 60px;
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

@media ($desktop) {
  .planDetail-main {
    width: 1200px;
  }
}
</style>
