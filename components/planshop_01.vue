<template>
  <div v-if="data[0].contentInfoList.planShopList" class="mdPickContainer">
    <Title :title="`MD's PICK`" />
    <Swiper
      :pagination="{}"
      type="mdPick"
      perView="3"
      :slideItem="data[0].contentInfoList.planShopList"
      :loop="false"
    />
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style lang="scss" scoped></style>
