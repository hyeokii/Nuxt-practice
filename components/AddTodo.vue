<template>
  <div class="addTodoBox">
    <input
      class="addInput"
      type="text"
      v-model="inputValue"
      placeholder="할일을 입력해주세요."
    />
    <button class="btn addBtn" @click="addTodo">추가</button>
  </div>
</template>

<script>
export default {
  props: {
    dataList: Array,
    curUser: Object,
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    async addTodo() {
      const newTodo = {
        loginId: this.curUser.loginId,
        userNm: this.curUser.userNm,
        title: "",
        contents: this.inputValue,
        status: "1",
        createdDtm: new Date(),
        updatedDtm: new Date(),
      };
      try {
        const response = await this.$axios
          .post(`http://localhost:3001/todoList`, { ...newTodo })
          .then((res) => {
            this.$emit("addedTodo", { id: res.data.id, ...newTodo });
            this.inputValue = "";
          });
      } catch (err) {
        console.log("err", err);
      }
    },
  },
};
</script>

<style>
.addTodoBox {
  margin: 1rem 0;
}

.addInput {
  border: 1px solid white;
  border-radius: 5px;
  margin-right: 5px;
  padding: 5px 10px;
  color: white;
}

.btn {
  color: white;
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 1rem;
}
</style>
