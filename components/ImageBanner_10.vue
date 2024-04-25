<template>
  <div>
    <Swiper
      :pagination="{}"
      type="event"
      perView="2"
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

<style></style>
