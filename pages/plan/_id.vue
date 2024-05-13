<template>
  <div class="planDetailContainer" v-if="planDataList">
    <div class="planTitle">기획전</div>
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
    <div class="planFooter">{{ planDataList.footerContents }}</div>
  </div>
</template>

<script>
import apiData from "../../api/apiData";
export default {
  data() {
    return {
      planDataList: [],
      planDivList: [],
      mkdpNo: "",
      curScroll: "1",
    };
  },
  async asyncData({ route }) {
    const params = route.params;
    const planData = await apiData.fetchPlanDetail(params.id);

    //PlanList 데이터
    return {
      planDataList: planData.data,
      planDivList: planData.data.planDivObjList,
      mkdpNo: params.id,
    };
  },
  methods: {
    moveToDiv(newScroll) {
      console.log(this.$refs.planDivs[newScroll - 1].$el.scrollIntoView());
    },
  },
};
</script>

<style lang="scss" scoped>
.planDetailContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.planTitle {
  font-size: 28px;
  margin-bottom: 2rem;
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
</style>
