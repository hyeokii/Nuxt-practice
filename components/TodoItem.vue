<template>
  <div class="list-wrapper" @click="Todo.status ? moveTodo(Todo.id) : ''">
    <input
      class="list-check"
      type="checkbox"
      @click.stop="handleChecked"
      :checked="Todo.status === 0"
    />
    <div :class="{ 'list-item': true, checked: Todo.status === 0 }">
      <span class="list-span">{{ Todo.userNm }}</span>
      <span class="list-span">{{ Todo.title }}</span>
      <span class="list-span">{{ Todo.contents }}</span>
    </div>
  </div>
</template>

<script>
import { putTodoList } from "../api";
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
    async handleChecked() {
      this.Todo.status ^= 1;
      const newTodo = {
        ...this.Todo,
        status: this.Todo.status,
      };
      await putTodoList(this.Todo.id, newTodo);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  border-bottom: 1px solid #ccc;
  padding: 20px;
  width: 100%;
  transition: transform 0.3s ease;
  display: flex;
  gap: 40px;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }

  .list-check {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  .checked {
    text-decoration: line-through;
    color: #ccc;
  }

  .list-item {
    display: flex;
    flex: 1;

    .list-span {
      display: flex;
      align-items: center;
      flex: 1;
    }
  }
}
</style>
