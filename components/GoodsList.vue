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
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 24px;
  padding-bottom: 20px;
}
</style>
