<template>
  <div v-if="planShopData.length" class="mdPickContainer">
    <div class="mdPickTitle">MD's PICK</div>
    <Swiper
      :pagination="{}"
      type="mdPick"
      perView="3"
      :slideItem="planShopData[0]?.contentInfoList[0]?.planShopList"
      :loop="false"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["planShopData"]),
  },
};
</script>

<style lang="scss" scoped>
.mdPickTitle {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 3rem;
}
</style>
