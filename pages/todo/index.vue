<template>
  <div class="todoListBox">
    <h1>{{ message }}</h1>
    <AddTodo
      :dataList="dataList"
      :curUser="curUserInfo"
      @addedTodo="handleAddTodo"
    />
    <ul>
      <li
        class="todoItem"
        v-for="(data, idx) in dataList"
        :key="data.id"
        :class="{ completed: data.status === '2' }"
      >
        <div class="todoContents">
          <input
            type="checkbox"
            v-model="data.checked"
            @change="toggleStatus(data)"
          />
          <span>{{ idx + 1 }}.</span>
          <span>{{ data.contents }}</span>
          <span>({{ data.userNm }})</span>
        </div>
        <NuxtLink :to="`/todo/${data.id}`">
          <button class="btn updateBtn" v-if="curUserName === data.userNm">
            수정
          </button>
        </NuxtLink>
        <button
          class="btn deleteBtn"
          v-if="curUserName === data.userNm"
          @click="deleteTodo(data.id)"
        >
          삭제
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
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
    const todoData = await $axios.get("http://localhost:3001/todoList");
    const usersRes = await $axios.get("http://localhost:3001/users");
    const users = usersRes.data;
    const curUserId = await $axios.get("http://localhost:3001/currentUser");
    const curUser = users.find((user) => user.id === String(curUserId.data.id));

    return {
      dataList: todoData.data,
      curUserName: curUser.userNm,
      curUserInfo: curUser,
    };
  },
  created() {
    this.dataList.forEach((item) => {
      item.checked = item.status === "2";
      // 2외에는 false
    });
  },
  mounted() {},
  methods: {
    async deleteTodo(todoId) {
      try {
        const response = await this.$axios
          .delete(`http://localhost:3001/todoList/${todoId}`)
          .then(() => {
            this.dataList = this.dataList.filter((todo) => todo.id !== todoId);
            alert("삭제되었습니다.");
          });
      } catch (err) {
        console.log("err", err);
      }
    },
    async handleAddTodo(newTodo) {
      this.dataList.push(newTodo);
      // 자식 컴포넌트에서 추가 이벤트가 일어났을 때 추가 된 할일 dataList에 추가해주기
    },

    async toggleStatus(data) {
      data.status = data.status === "1" ? "2" : "1";

      try {
        await this.$axios.patch(`http://localhost:3001/todoList/${data.id}`, {
          status: data.status,
        });
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>

<style>
.todoListBox {
  display: flex;
  flex-direction: column;
  flex: 1 1;
  align-items: center;
  margin-top: 5rem;
}

.todoItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  width: 400px;
}

.completed {
  text-decoration: line-through;
  color: #999;
}

.todoContents {
  width: 250px;
  display: flex;
  justify-content: space-between;
}

.btn {
  color: white;
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 1rem;
}
</style>
