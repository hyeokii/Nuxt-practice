<template>
  <div v-if="data">
    <Swiper
      :pagination="{
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
      }"
      type="main"
      perView="1"
      :slideItem="data"
      :loop="true"
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

<style></style>
