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
  props: {},
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
      // this.$axios.put(
      //   "http://localhost:3001/todoList?contents=" + inpTodoValue
      // );
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
