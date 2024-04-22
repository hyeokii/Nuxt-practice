<template>
  <div>Tab1</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["goodsListData"]),
  },
};
</script>

<style></style>
