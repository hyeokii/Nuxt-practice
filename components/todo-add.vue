<template>
  <div class="inp-box">
    <input
      type="text"
      value=""
      id="inpTextTodo"
      placehoder=""
      class="inp-text"
    />
    <button type="button" @click="addTodo" class="btn">확인</button>
  </div>
</template>
<script>
export default {
  name: "TodoAdd",
  props: {
    userData: {
      type: Object,
      defaultValue: undefined,
    },
  },
  data() {
    return {};
  },
  created() {},
  // client
  mounted() {},
  // useCallback
  methods: {
    async addTodo() {
      const inpTodoValue = document.querySelector("#inpTextTodo").value;
      // console.log(this.userData)
      const todoData = {
        id: "6", // 모르겠음 index
        loginId: this.userData.loginId,
        userNm: this.userData.userNm,
        title: "할 일6", // 모르겠음 index
        contents: inpTodoValue,
        status: "1",
        createdDtm: new Date(),
        updatedDtm: new Date()
      }
      this.$axios.post(
        "http://localhost:3001/todoList",
        todoData
      );
    },
  },
  // useMemo
  computed: {},
};
</script>
<style scoped lang="scss">
.inp-box {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .btn {
    margin: 0 5px;
  }
}
</style>
