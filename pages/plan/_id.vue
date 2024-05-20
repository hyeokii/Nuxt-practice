<template>
  <div class="planDetailContainer" v-if="planDataList">
    <div class="planTitle">기획전</div>
    <div class="btnContainer">
      <span class="likeBtn" @click="setIsLike(mkdpNo)"
        ><img
          src="../../public/like_full.png"
          alt="likeImg"
          v-if="isLike(mkdpNo)" /><img
          v-else
          src="../../public/like.png"
          alt="likeImg"
      /></span>
      <span class="shareBtn"
        ><img src="../../public/share.png" alt="shareImg"
      /></span>
    </div>
    <div class="titleImg" v-html="planDataList.titleHtmlPc"></div>
    <ScrollSelectBox
      :planDivList="planDivList"
      :curScroll="curScroll"
      @moveToDiv="moveToDiv"
    />
    <PlanDiv
      class="planDiv"
      v-for="planDiv in planDivList"
      :planDiv="planDiv"
      :key="planDiv.divobjNo"
      :goodsList="planDiv.goodsList"
      :mkdpNo="mkdpNo"
      ref="planDivs"
    ></PlanDiv>
    <div class="line"></div>
    <div class="recentPlanTitle">최신 기획전</div>
    <RecentGoodsSwiper :recentPlanList="planDataList.recentPlanList" />

    <div class="planFooter" v-html="planDataList.footerContents"></div>
    <div>
      <button @click="goToMain" class="listBtn">목록</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import apiData from "../../api/apiData";
export default {
  computed: {
    ...mapState(["planFavoriteData"]),
  },
  data() {
    return {
      planDataList: [],
      planDivList: [],
      mkdpNo: "",
      curScroll: "0",
    };
  },
  async asyncData({ route, $axios, store }) {
    const params = route.params;
    const planData = await apiData.fetchPlanDetail(params.id);

    const goodsFavoriteData = await $axios.get(
      "http://localhost:3001/goods?loginId=ccomo07071"
    );
    store.commit("SET_GOODS_FAVORITE", goodsFavoriteData.data);

    //PlanList 데이터
    return {
      planDataList: planData.data,
      planDivList: planData.data.planDivObjList,
      mkdpNo: params.id,
    };
  },
  methods: {
    moveToDiv(newScroll) {
      this.$refs.planDivs[newScroll - 1].$el.scrollIntoView();
    },

    goToMain() {
      this.$router.push("/plan");
    },

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
.planDetailContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 0;
}

.planTitle {
  font-size: 28px;
  margin-bottom: 3rem;
}

.btnContainer {
  width: 1240px;
  display: flex;
  justify-content: right;
  margin-bottom: 1rem;

  .likeBtn {
    margin-right: 0.5rem;
    cursor: pointer;
  }

  .shareBtn {
    cursor: pointer;
  }
}

.titleImg::v-deep {
  margin-bottom: 2rem;
  p {
    margin: 0;

    img {
      width: 1240px;
    }
  }
}

.planDiv {
  margin-bottom: 2rem;
}

.planFooter {
  width: 1240px;
  text-align: start;
}

.line {
  width: 1240px;
  height: 3px;
  background-color: rgb(236, 236, 236);
  margin-bottom: 3rem;
}

.recentPlanContainer {
  width: 1240px;
}

.recentPlanTitle {
  width: 1240px;
  text-align: left;
  margin-bottom: 2rem;
}

.listBtn {
  border: 1px solid rgb(223, 223, 223);
  padding: 0.5rem 10rem;
  font-size: 14px;
  margin-top: 3rem;
}
</style>
