<template>
  <div class="flex">
    <div class="todoDetail">
      <div class="titleBox">
        <NuxtLink to="/todo" class="prev"
          ><span class="prevBtn">&#10094;</span></NuxtLink
        >
        <span class="pageTitle">{{ message }}</span>
      </div>
      <div class="inputBox">
        <input
          class="contentsInput"
          v-model="editContents"
          placeholder="수정 내용을 입력해주세요."
          @keyup.enter="updateTodo"
        />
        <button class="saveBtn" @click="updateTodo">저장</button>
      </div>
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
        if (this.editContents.length !== 0) {
          const response = await this.$axios
            .put(`http://localhost:3001/todoList/${this.todo.id}`, {
              ...this.todo,
              contents: this.editContents,
              updatedDtm: new Date(),
            })
            .then(() => {
              this.$router.push("/todo");
            });
        } else {
          alert("수정 내용을 입력해주세요!");
        }
      } catch (err) {
        console.log("err", err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: start;
}

.todoDetail {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem;
  margin-top: 5rem;
  width: 450px;
}

.titleBox {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-bottom: 3rem;
}

.pageTitle {
  font-size: 1.5rem;
}

.prev {
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
}

.prev .prevBtn {
  color: white;
  position: absolute;
  left: 0;
  top: 0;
}

.inputBox {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.contentsInput {
  border: 1px solid white;
  padding: 5px 15px;
  width: 250px;
  border-radius: 5px;
  color: white;
}

.saveBtn {
  border: 1px solid white;
  background-color: #3c763d;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;

  &:hover {
    background-color: #247425;
  }
}
</style>
