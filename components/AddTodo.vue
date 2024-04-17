<template>
  <div class="addTodoBox">
    <div>
      <input
        class="titleInput"
        type="text"
        v-model="titleValue"
        placeholder="제목을 입력해주세요."
        @keyup.enter="addTodo"
      />
      <input
        class="addInput"
        type="text"
        v-model="inputValue"
        placeholder="할일을 입력해주세요."
        @keyup.enter="addTodo"
      />
    </div>
    <button class="btn addBtn" @click="addTodo">추가</button>
  </div>
</template>

<script>
import apiData from "@/api/apiData.js";
export default {
  props: {
    dataList: Array,
    curUser: Object,
  },
  data() {
    return {
      inputValue: "",
      titleValue: "",
    };
  },
  methods: {
    async addTodo() {
      const newTodo = {
        loginId: this.curUser.loginId,
        userNm: this.curUser.userNm,
        title: this.titleValue,
        contents: this.inputValue,
        status: "1",
        createdDtm: new Date().toLocaleString("ko-KR"),
        updatedDtm: new Date().toLocaleString("ko-KR"),
      };
      try {
        if (this.inputValue.length !== 0 && this.titleValue.length !== 0) {
          await apiData.addTodo({ ...newTodo }).then((res) => {
            this.$emit("addedTodo", { id: res.data.id, ...newTodo });
            // 할일 추가 했을 때 부모 컴포넌트에게 이벤트 발생 알려주기
            this.inputValue = "";
            this.titleValue = "";
          });
        } else if (this.inputValue.length === 0) {
          alert("할일을 입력해주세요!");
        } else {
          alert("제목을 입력해주세요!");
        }
      } catch (err) {
        console.log("err", err);
      }
    },
  },
};
</script>

<style scoped>
.addTodoBox {
  margin-top: 3rem;
  margin-bottom: 1rem;
  width: 650px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 1rem;
}

.addInput,
.titleInput {
  border: 1px solid white;
  border-radius: 5px;
  margin-right: 5px;
  padding: 10px 15px;
  color: white;
  margin-right: 2rem;
}

.btn {
  color: white;
  border: 1px solid white;
  padding: 10px 15px;
  border-radius: 5px;
  margin-left: 1rem;
}
</style>
