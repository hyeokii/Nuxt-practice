<template>
  <div class="brandContainer">
    <div class="brandTitle">주목해야 할 브랜드</div>
    <Swiper :pagination="{}" type="brand" perView="3" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.brandTitle {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 3rem;
}
</style>
