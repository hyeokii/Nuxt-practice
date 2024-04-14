<template>
  <div class="container">
    <div class="todo-info">
      <div><strong>작성자:</strong> {{ todoData.userNm }}</div>
      <div><strong>제목:</strong> {{ todoData.title }}</div>
      <div><strong>내용:</strong> {{ todoData.contents }}</div>
      <div><strong>수정날짜:</strong> {{ formattedDate }}</div>
    </div>
    <div v-if="isMyTodo" class="button-container">
      <button class="edit-button" @click="handleEditModal">수정</button>
      <button class="delete-button" @click="deleteTodo(todoData.id)">
        삭제
      </button>
    </div>
    <button class="back-button" @click="$router.push('/todo')">뒤로가기</button>

    <EditTodo
      v-if="isEdit"
      :todo="todoData"
      @handle-modal="handleEditModal"
      @edit-todo="editTodoList"
    ></EditTodo>
  </div>
</template>

<script>
import EditTodo from "../../components/EditTodo.vue";
export default {
  name: "todoDetail",
  components: {
    EditTodo,
  },
  props: {},
  data() {
    return {
      todoData: "",
      isEdit: false,
      isMyTodo: false,
    };
  },
  computed: {
    formattedDate() {
      const date = new Date(this.todoData.updatedDtm);
      return `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
        .getHours()
        .toString()
        .padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
    },
  },
  async asyncData({ $axios, params }) {
    const id = params.id;
    const res = await $axios.get(`http://localhost:3001/todoList?id=${id}`);
    return { todoData: res.data[0] };
  },
  methods: {
    editTodoList(data) {
      this.todoData = data;
    },
    async deleteTodo(id) {
      if (confirm("삭제하시겠습니까?")) {
        await this.$axios.delete(`http://localhost:3001/todoList/${id}`);
        this.$router.push("/todo");
      }
    },
    async handleMy() {
      const res = await this.$axios.get(`http://localhost:3001/currentUser`);
      const currentId = res.data.id;
      const user = await this.$axios.get(
        `http://localhost:3001/users?id=${currentId}`
      );
      const userName = user.data[0].userNm;
      this.isMyTodo = userName === this.todoData.userNm ? true : false;
    },
    handleEditModal() {
      this.isEdit = !this.isEdit;
    },
  },
  created() {
    this.handleMy();
  },
  mounted() {},
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.todo-info {
  margin-bottom: 20px;
}

.todo-info div {
  margin-bottom: 10px;
}

.todo-info strong {
  margin-right: 10px;
}

.button-container {
  display: flex;
  gap: 20px;
  margin: 20px 0;
}

.edit-button,
.delete-button,
.back-button {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-button:hover,
.delete-button:hover,
.back-button:hover {
  background-color: #388e3c;
}
</style>
