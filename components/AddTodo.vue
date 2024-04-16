<template>
  <div>
    <div class="backdrop" @click="closeModal"></div>
    <div class="addModal">
      <div class="input-container">
        <h2>할 일 추가</h2>
        <input
          v-model="newTitle"
          type="text"
          placeholder="제목"
          @keyup.enter="addTodo"
        />
        <textarea
          v-model="newContents"
          type="text"
          placeholder="내용"
          @keyup.enter="addTodo"
        />
        <button class="add-button" @click="addTodo">추가하기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      newTitle: "",
      newContents: "",
      newData: {
        id: "",
        loginId: "",
        userNm: "",
        status: 1,
        createdDtm: "",
        updatedDtm: "",
      },
    };
  },
  methods: {
    async addTodo() {
      const { newTitle, newContents, dataList, $axios } = this;
      if (confirm("추가하시겠습니까?") && newTitle && newContents) {
        const currentTime = new Date();
        const nextId = dataList.length
          ? Math.max(...dataList.map((todo) => todo.id)) + 1
          : 1;
        const {
          data: { id: currentId },
        } = await $axios.get("http://localhost:3001/currentUser");
        const {
          data: [{ userNm }],
        } = await $axios.get(`http://localhost:3001/users?id=${currentId}`);
        this.newData = {
          title: newTitle,
          contents: newContents,
          id: nextId.toString(),
          loginId: currentId,
          userNm,
          createdDtm: currentTime.toISOString(),
          updatedDtm: currentTime.toISOString(),
        };
        await $axios.post("http://localhost:3001/todoList", this.newData);
        this.newTitle = "";
        this.newContents = "";
        this.$emit("add-todo", this.newData);
        this.$emit("handle-modal");
      } else {
        alert("제목과 내용을 입력해주세요");
      }
    },
    closeModal() {
      this.$emit("handle-modal");
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 투명도 조절 가능 */
}

.addModal {
  position: fixed;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 500px;
  height: 500px;
}

.addModal h2 {
  color: black;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
}

.addModal input {
  border: 1px solid black;
  border-radius: 5px;
  padding: 8px;
  box-sizing: border-box;
}

.addModal textarea {
  border: 1px solid black;
  border-radius: 5px;
  padding: 8px;
  box-sizing: border-box;
  height: 100%;
}

.add-button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #388e3c;
}
</style>
