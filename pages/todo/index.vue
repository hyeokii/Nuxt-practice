<template>
  <div class="container">
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div v-else>
      <TodoList :dataList="dataList"></TodoList>
      <AddBtn :dataList="dataList"></AddBtn>
    </div>
  </div>
</template>

<script>
import AddBtn from "../../components/AddBtn.vue";
import TodoList from "../../components/TodoList.vue";

export default {
  name: "MainPage",
  components: {
    AddBtn,
    TodoList,
  },
  data() {
    return {
      dataList: [],
      errorMessage: "",
    };
  },

  async asyncData({ $axios }) {
    try {
      const res = await $axios.get("http://localhost:3001/todoList");
      return { dataList: res.data };
    } catch (error) {
      return { errorMessage: "데이터를 불러오는 도중 오류가 발생했습니다." };
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: auto;

  .error-message {
    color: red;
    text-align: center;
    margin-top: 20px;
  }
}
</style>
