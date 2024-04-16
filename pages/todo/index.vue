<template>
  <div class="todoListBox">
    <span class="pageTitle">{{ message }}</span>
    <AddTodo
      :dataList="dataList"
      :curUser="curUserInfo"
      @addedTodo="handleAddTodo"
    />
    <ul v-if="dataList.length > 0">
      <li class="todoItem" v-for="data in dataList" :key="data.id">
        <TodoItem :data="data" />
        <div class="btnBox">
          <NuxtLink :to="`/todo/${data.id}`">
            <CustomBtn
              v-if="curUserName === data.userNm"
              :label="'수정'"
              buttonType="updateBtn"
              :isDisabled="data.status === '2'"
            />
          </NuxtLink>
          <CustomBtn
            v-if="curUserName === data.userNm"
            :label="'삭제'"
            buttonType="deleteBtn"
            :isDisabled="data.status === '2'"
            :onClick="() => deleteTodo(data.id)"
          />
        </div>
      </li>
    </ul>
    <div v-else>
      <p>할 일이 없습니다.</p>
    </div>
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
          updatedDtm: new Date(),
        });
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

.completed {
  text-decoration: line-through;
  color: #777777;
}

.btnbox {
  width: 100px;
}

.btn {
  color: white;
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 1rem;
}

.updateBtn {
  background-color: #337ab7;

  &:hover {
    background-color: #256ead;
  }
}

.deleteBtn {
  background-color: #a94442;

  &:hover {
    background-color: #a9302e;
  }
}

button:disabled {
  background-color: #777777;
  color: black;
}
</style>
