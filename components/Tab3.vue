<template>
  <div class="tab3Container">
    <ItemCard
      v-for="(product, idx) in data[0]?.contentInfoList[1]?.productList"
      :key="idx"
      :product="product"
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

<style lang="scss" scoped>
.tab3Container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
  }
}

.tab3Container > *:not(:last-child) {
  margin-right: 20px;
}
</style>
