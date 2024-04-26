<template>
  <div class="container">
    <div class="todo-info">
      <div><strong>작성자:</strong> {{ todoData.userNm }}</div>
      <div><strong>제목:</strong> {{ todoData.title }}</div>
      <div><strong>내용:</strong> {{ todoData.contents }}</div>
      <div><strong>수정날짜:</strong> {{ formattedDate }}</div>
    </div>
    <div class="btn-wrapper">
      <MyTodoBtn v-if="isMyTodo" :todoData="todoData"></MyTodoBtn>
      <button class="back-button" @click="$router.push('/todo')">
        뒤로가기
      </button>
    </div>
  </div>
</template>

<script>
import { fetchCurrentId, fetchUserName, getTodoItem } from "../../api";
import MyTodoBtn from "../../components/MyTodoBtn.vue";
import dayjs from "dayjs";

export default {
  name: "todoDetail",
  components: {
    MyTodoBtn,
  },
  props: {},
  data() {
    return {
      todoData: {},
      isMyTodo: false,
    };
  },
  computed: {
    formattedDate() {
      const date = dayjs(this.todoData.updatedDtm).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      return date;
    },
  },
  async asyncData({ params }) {
    try {
      const id = params.id;
      const res = await getTodoItem(id);
      console.log(res.data);
      return { todoData: res.data };
    } catch (error) {
      console.error("데이터 불러오기 실패", error);
    }
  },
  methods: {
    async handleMy() {
      try {
        const res = await fetchCurrentId();
        const currentId = res.data.id;
        const user = await fetchUserName(currentId);
        console.log(user);
        const userName = user.data.userNm;
        this.isMyTodo = userName === this.todoData.userNm ? true : false;
      } catch (error) {
        console.error("정보 불러오기 실패", error);
      }
    },
    updateTodoData(data) {
      this.todoData = data;
    },
  },
  created() {
    this.handleMy();
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .btn-wrapper {
    display: flex;
    justify-content: end;
    position: relative;

    .back-button {
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #388e3c;
      }
    }
  }

  .todo-info {
    margin-bottom: 20px;
    div {
      margin-bottom: 10px;
    }
    strong {
      margin-right: 10px;
    }
  }
}
</style>
