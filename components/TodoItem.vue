<template>
  <div class="list-wrapper" @click="handleItemClick">
    <input
      class="list-check"
      type="checkbox"
      @click="handleChecked"
      :checked="Todo.status ? true : false"
    />
    <div :class="Todo.status ? 'list-item checked' : 'list-item'">
      <span class="list-span">{{ Todo.userNm }}</span>
      <span class="list-span">{{ Todo.title }}</span>
      <span class="list-span">{{ Todo.contents }}</span>
    </div>
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
    handleItemClick(event) {
      if (event.target.tagName.toLowerCase() === "input" || this.Todo.status) {
        event.stopPropagation();
      } else {
        this.moveTodo(this.Todo.id);
      }
    },
    moveTodo(id) {
      try {
        this.$router.push(`todo/${id}`);
      } catch (error) {
        alert("이동 중 오류가 발생했습니다.");
      }
    },
    async handleChecked() {
      this.Todo.status = !this.Todo.status;
      await this.$axios.put(`http://localhost:3001/todoList/${this.Todo.id}`, {
        ...this.Todo,
        status: this.Todo.status,
      });
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

  &:hover {
    transform: translateY(-2px);
  }

  .list-check {
    /* checkbox 스타일 */
    width: 24px;
    height: 24px;
    margin-right: 10px; /* checkbox와의 간격 조정 */
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
