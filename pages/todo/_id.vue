<template>
  <div class="todoDetail">
    <h1 class="title">{{ message }}</h1>
    <div>
      <input
        class="contentsInput"
        v-model="editContents"
        placeholder="수정할 컨텐츠"
      />
      <button class="saveBtn" @click="updateTodo">저장</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "todoDetail",
  props: {
    name: {
      type: String,
      default: "",
    },
    contents: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      todo: {},
      editContents: "",
      message: "Update Todo",
    };
  },
  async asyncData({ $axios, params }) {
    const res = await $axios.get("http://localhost:3001/todoList");
    const dataList = res.data;
    const todoId = params.id;
    const todo = dataList.find((todo) => todo.id === todoId);
    return { todo };
  },
  created() {},
  mounted() {
    this.editContents = this.todo.contents;
  },

  methods: {
    async updateTodo() {
      try {
        const response = await this.$axios
          .put(`http://localhost:3001/todoList/${this.todo.id}`, {
            ...this.todo,
            contents: this.editContents,
            updatedDtm: new Date(),
          })
          .then(() => {
            this.$router.push("/todo");
          });
      } catch (err) {
        console.log("err", err);
      }
    },
  },
};
</script>

<style>
.todoDetail {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 3rem;
  margin-top: 5rem;
}

.title {
  margin-bottom: 1rem;
}

.contentsInput {
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
}

.saveBtn {
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
