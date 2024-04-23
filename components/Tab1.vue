<template>
  <div class="tab1Container">
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

<style>
.tab1Container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  place-items: center;
}

.tab1Container > *:not(:last-child) {
  margin-right: 20px;
}
</style>
