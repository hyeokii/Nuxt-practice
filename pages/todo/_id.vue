<template>
  <div class="todoDetail">
    <input
      class="contentsInput"
      v-model="editContents"
      placeholder="수정할 컨텐츠"
    />
    <button class="saveBtn" @click="updateTodo">저장</button>
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
      message: "TodoList",
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
        const response = await this.$axios.put(
          `http://localhost:3001/todoList/${this.todo.id}`,
          {
            ...this.todo,
            contents: this.editContents,
          }
        );
        if (response.status === 200) {
          this.$router.push("/todo");
        }
      } catch (err) {
        console.log("err", err);
      }
    },
  },
};
</script>

<style>
.todoDetail {
  background-color: white;
  width: 300px;
  height: 300px;
}

.contentsInput {
  border: 1px solid black;
}

.saveBtn {
  border: 1px solid black;
  color: black;
}
</style>
