<template>
  <div v-if="brandData" class="brandContainer">
    <div class="brandTitle">주목해야 할 브랜드</div>
    <Swiper
      :pagination="{}"
      type="brand"
      perView="3"
      :slideItem="brandData[0]?.contentInfoList[0]?.imageList"
      :loop="false"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["brandData"]),
  },
};
</script>

<style lang="scss" scoped>
.brandTitle {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 3rem;
}
</style>
