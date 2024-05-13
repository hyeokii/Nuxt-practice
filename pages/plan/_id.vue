<template>
  <div>{{ res }}</div>
</template>

<script>
import { getBrandDetail } from "../../api";
export default {
  async asyncData({ params }) {
    try {
      const id = params.id;
      const res = await getBrandDetail(id);
      return { res };
    } catch (error) {
      console.log("데이터 불러오기 실패", error);
    }
  },
};
</script>

<style></style>
