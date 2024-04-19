<template>
  <div class="container">
    <div class="todo-info">
      <div><strong>작성자:</strong> {{ todoData.userNm }}</div>
      <div><strong>제목:</strong> {{ todoData.title }}</div>
      <div><strong>내용:</strong> {{ todoData.contents }}</div>
      <div><strong>수정날짜:</strong> {{ formattedDate }}</div>
    </div>
    <div class="btn-wrapper">
      <MyTodoBtn
        v-if="isMyTodo"
        :todoData="todoData"
        @mytodo-btn="updateTodoData"
      ></MyTodoBtn>
      <button class="back-button" @click="$router.push('/todo')">
        뒤로가기
      </button>
    </div>
  </div>
</template>

<script>
import MyTodoBtn from "../../components/MyTodoBtn.vue";

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
      const date = new Date(this.todoData.updatedDtm);
      return `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
        .getHours()
        .toString()
        .padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
    },
  },
  async asyncData({ $axios, params }) {
    try {
      const id = params.id;
      const res = await $axios.get(`http://localhost:3001/todoList?id=${id}`);
      return { todoData: res.data[0] };
    } catch (error) {
      console.error("데이터 불러오기 실패", error);
    }
  },
  methods: {
    async handleMy() {
      try {
        const res = await this.$axios.get(`http://localhost:3001/currentUser`);
        const currentId = res.data.id;
        const user = await this.$axios.get(
          `http://localhost:3001/users?id=${currentId}`
        );
        const userName = user.data[0].userNm;
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
  mounted() {},
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
