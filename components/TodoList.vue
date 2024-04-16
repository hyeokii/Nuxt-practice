<template>
  <div>
    <TodoItem v-for="list in dataList" :key="list.id" :Todo="list"> </TodoItem>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: {
    TodoItem,
  },
  props: {
    dataList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
