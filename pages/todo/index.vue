<template>
  <div>
    {{ message }} <br />
    <ul>
      <li v-for="data in dataList" :key="data.id">
        {{ data.contents }}
        <NuxtLink :to="`/todo/${data.id}`">
          <button v-if="curUserName === data.userNm">수정</button>
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
