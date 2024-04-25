<template>
  <div class="goods-list">
    <GoodsItem
      v-for="item in goodsList"
      :key="item.goodsNo"
      :item="item"
    ></GoodsItem>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";
export default {
  components: {
    GoodsItem,
  },
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      goodsList: this.list.contentInfoList[1].productList,
    };
  },
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
