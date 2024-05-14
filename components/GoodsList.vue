<template>
  <div class="goods-list">
    <Goods v-for="item in data" :key="item.goodsNo" :item="item"></Goods>
  </div>
</template>

<script>
import Goods from "./Goods.vue";
export default {
  components: {
    Goods,
  },
  props: {
    data: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  width: 100%;
  gap: 24px;
  padding-bottom: 20px;
}
</style>
