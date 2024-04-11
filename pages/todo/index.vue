<template>
  <div class="todoListBox">
    <h1>{{ message }}</h1>
    <ul>
      <li class="todoItem" v-for="data in dataList" :key="data.id">
        {{ data.id }}.
        {{ data.contents }}
        <NuxtLink :to="`/todo/${data.id}`">
          <button class="updateBtn" v-if="curUserName === data.userNm">
            수정
          </button>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
// 서버사이드

export default {
  name: "MainPage",
  data() {
    return {
      dataList: [],
      curUserName: "",
      message: "TodoList",
    };
  },
  async asyncData({ $axios }) {
    const todoData = await $axios.get("http://localhost:3001/todoList");
    const usersRes = await $axios.get("http://localhost:3001/users");
    const users = usersRes.data;
    const curUserId = await $axios.get("http://localhost:3001/currentUser");
    const curUser = users.find((user) => user.id === String(curUserId.data.id));

    return { dataList: todoData.data, curUserName: curUser.userNm };
  },
  created() {},
  mounted() {},
};
</script>

<style>
.todoListBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
}

.todoItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}

.updateBtn {
  color: white;
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 1rem;
}
</style>
