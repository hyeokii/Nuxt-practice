<template>
  <div class="todoListBox">
    <span class="pageTitle">{{ message }}</span>
    <AddTodo :curUser="curUserInfo" @addedTodo="handleAddTodo" />
    <ul v-if="dataList.length > 0">
      <li class="todoItem" v-for="data in dataList" :key="data.id">
        <TodoItem
          :data="data"
          :onClick="() => toggleStatus(data)"
          :curUserName="curUserName"
          @deletedTodo="handleDeleteTodo"
        />
      </li>
    </ul>
    <div v-else>
      <p>할 일이 없습니다.</p>
    </div>
  </div>
</template>

<script>
import apiData from "@/api/apiData.js";
export default {
  name: "MainPage",
  data() {
    return {
      dataList: [],
      curUserName: "",
      curUserInfo: {},
      message: "TodoList",
    };
  },
  async asyncData({ $axios }) {
    const [todoData, usersData, curUserId] = await Promise.all([
      $axios.get("http://localhost:3001/todoList"),
      $axios.get("http://localhost:3001/users"),
      $axios.get("http://localhost:3001/currentUser"),
    ]);

    const users = usersData.data;
    const curUser = users.find((user) => user.id === String(curUserId.data.id));

    return {
      dataList: todoData.data,
      curUserInfo: curUser,
      curUserName: curUser.userNm,
    };
  },
  created() {
    this.dataList.forEach((item) => {
      item.checked = item.status === "2";
      // 2 외에는 false
    });
  },
  mounted() {},
  methods: {
    async handleAddTodo(newTodo) {
      this.dataList.push(newTodo);
      // 자식 컴포넌트에서 추가 이벤트가 일어났을 때 추가 된 할일 dataList에 추가해주기
    },

    async handleDeleteTodo(todoId) {
      this.dataList = this.dataList.filter((todo) => todo.id !== todoId);
    },

    async toggleStatus(data) {
      data.status = data.status === "1" ? "2" : "1";
      try {
        await apiData.toggleTodoStatus(data.id, data.status);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.todoListBox {
  display: flex;
  flex-direction: column;
  flex: 1 1;
  align-items: center;
  margin-top: 5rem;
}

.pageTitle {
  font-size: 72px;
  font-weight: 700;
}

.todoItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
</style>
