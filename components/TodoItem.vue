<template>
  <div class="list-item" @click="moveTodo(Todo.id)">
    <span class="list-span">{{ Todo.userNm }}</span>
    <span class="list-span">{{ Todo.title }}</span>
    <span class="list-span">{{ Todo.contents }}</span>
  </div>
</template>

<script>
export default {
  props: {
    Todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    moveTodo(id) {
      try {
        this.$router.push(`todo/${id}`);
      } catch (error) {
        alert("이동 중 오류가 발생했습니다.");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  transition: transform 0.3s ease;
  display: flex;

  &:hover {
    transform: translateY(-2px);
  }

  .list-span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
}
</style>
