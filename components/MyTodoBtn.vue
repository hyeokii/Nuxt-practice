<template>
  <div>
    <div class="button-container">
      <button class="edit-button" @click="handleEditModal">수정</button>
      <button class="delete-button" @click="deleteTodo(todoData.id)">
        삭제
      </button>
    </div>
    <EditModal
      v-if="isEdit"
      :todo="todoData"
      @handle-modal="handleEditModal"
      @edit-todo="editTodoList"
    ></EditModal>
  </div>
</template>

<script>
import EditModal from "./EditModal.vue";

export default {
  components: {
    EditModal,
  },
  props: {
    todoData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    handleEditModal() {
      this.isEdit = !this.isEdit;
    },
    async deleteTodo(id) {
      try {
        if (confirm("삭제하시겠습니까?")) {
          await this.$axios.delete(`http://localhost:3001/todoList/${id}`);
          alert("삭제 완료하였습니다.");
          this.$router.push("/todo");
        }
      } catch (error) {
        alert("삭제 중 오류가 발생했습니다.");
      }
    },
    editTodoList(data) {
      this.$emit("mytodo-btn", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.button-container {
  position: absolute;
  left: 0;
  display: flex;
  gap: 20px;

  .edit-button,
  .delete-button {
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #388e3c;
    }
  }
}
</style>
