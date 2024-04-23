<template>
  <div v-if="data" class="brandContainer">
    <Title :title="'주목해야 할 브랜드'" />
    <Swiper
      :pagination="{}"
      type="brand"
      perView="3"
      :slideItem="data[0]?.contentInfoList[0]?.imageList"
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
