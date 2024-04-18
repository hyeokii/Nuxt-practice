<template>
  <div class="pg-todo">
    <h2 class="pg-tit">{{ message }}</h2>
    <Todo-Add :userData="userData" />
    <div class="list-todo">
      <Todo
        v-for="(data, index) in dataList"
        :data="data"
        :loginId="loginId"
        v-bind:key="`${index}_${data.id}`"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: "Todopage",

  async asyncData({ $axios }) {
    const data = await $axios.get("http://localhost:3001/todoList");
    const currentData = await $axios.get("http://localhost:3001/currentUser");
    const userData = await $axios.get(
      "http://localhost:3001/users?id=" + currentData.data.id
    ); // 로그인 한 아이디
    return {
      dataList: data.data,
      currentData: currentData.data.id,
      loginId: userData.data[0].loginId,
      userData: userData.data[0],
    };
  },
  data() {
    return {
      dataList: [],
      message: "TODOLIST",
      id: null,
      currentData: null,
      loginId: null,
      userData: null,
    };
  },
  created() {},
  // client
  mounted() {},
  // useCallback
  methods: {},
  // useMemo
  computed: {},
};
</script>

<style lang="scss">
.list-todo {
  padding: 0;
  margin-top: 30px;
  width: 100%;
  & > div {
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    &:first-child {
      margin-top: 0;
    }
    .name {
      margin-left: 20px;
    }
    .box-btn {
      margin-left: auto;
    }
  }
}
</style>
