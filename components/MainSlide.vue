<template>
  <div>
    <Swiper
      :pagination="{
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
      }"
      type="main"
      perView="1"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
