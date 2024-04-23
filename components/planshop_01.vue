<template>
  <div v-if="data.length" class="mdPickContainer">
    <Title :title="`MD's PICK`" />
    <Swiper
      :pagination="{}"
      type="mdPick"
      perView="3"
      :slideItem="data[0]?.contentInfoList[0]?.planShopList"
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
