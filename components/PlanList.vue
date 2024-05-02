<template>
  <div>
    <div class="plan-wrapper">
      <div
        class="plan-product"
        v-for="plan in filteredPlans"
        :key="plan.mkdpNo"
      >
        <img
          class="plan-img"
          loading="lazy"
          :src="imageUrl(plan.imageList[0]?.bnrImgPathNm)"
          :alt="plan.imageList[0]?.mkdpNo"
        />
        <p class="plan-title">{{ plan.mkdpNm }}</p>
        <p class="plan-content">{{ plan.introConts }}</p>
        <p class="plan-date">{{ plan.startDate }} ~ {{ plan.endDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plans: [],
    };
  },
  computed: {
    filteredPlans() {
      let plans = this.plans;
      if (this.$store.state.selectedTimeOption === "recent") {
        plans = plans
          .slice()
          .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
      } else if (this.$store.state.selectedTimeOption === "close") {
        plans = plans
          .slice()
          .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
      }
      return plans;
    },
  },
  async fetch() {
    this.group = this.$route.query.group;
    await this.fetchPlans();
  },
  watch: {
    "$route.query.group"(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.group = newValue;
        this.fetchPlans();
      }
    },
  },
  methods: {
    async fetchPlans() {
      try {
        let url = "https://gw.x2bee.com/api/display/v1/plan/planList";
        if (this.group) {
          url += `?dispGrpNo=${this.group}`;
        }
        const response = await this.$axios.get(url);
        const currentTime = new Date();
        const filteredPlans = response.data.payload.planInfoList.filter(
          (plan) => {
            const startDate = new Date(plan.startDate);
            const endDate = new Date(plan.endDate);
            return startDate <= currentTime && currentTime <= endDate;
          }
        );
        this.plans = filteredPlans;
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    },
    imageUrl(src) {
      console.log(src);
      return `https://img-stg.x2bee.com/${src}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.plan-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 60px;
  column-gap: 10px;
  margin: 0 auto;
  padding: 0 100px;
  width: 100%;
  height: 100%;
  .plan-product {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px;

    .plan-img {
      width: 100%;
      height: 384px;
      object-fit: fill;
    }
    .plan-title {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 0;
    }
    .plan-content {
      font-size: 14px;
      margin-bottom: 0;
    }
    .paln-date {
      font-size: 12px;
      color: #767676;
    }
  }
}
</style>
