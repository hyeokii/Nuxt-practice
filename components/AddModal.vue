<template>
  <div>
    <div class="backdrop" @click="closeModal"></div>
    <div class="addModal">
      <div class="input-container">
        <h2>할 일 추가</h2>
        <button class="close-button" @click="closeModal">X</button>
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
        ></textarea>
        <button class="add-button" @click="addTodo">추가하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import { addTodoList, fetchCurrentId, fetchUserName } from "../api";

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
    };
  },
  methods: {
    async addTodo() {
      try {
        if (!this.newTitle || !this.newContents) {
          throw new Error("제목과 내용을 입력해주세요.");
        }
        const currentTime = new Date();
        const nextId = this.dataList.length
          ? Math.max(...this.dataList.map((todo) => parseInt(todo.id))) + 1
          : 1;

        const {
          data: { id: currentId },
        } = await fetchCurrentId();
        const {
          data: { userNm, loginId },
        } = await fetchUserName(currentId);

        const newData = {
          title: this.newTitle,
          contents: this.newContents,
          id: nextId.toString(),
          loginId,
          userNm,
          status: 1,
          createdDtm: currentTime.toISOString(),
          updatedDtm: currentTime.toISOString(),
        };

        await addTodoList(newData);
        this.newTitle = "";
        this.newContents = "";
        alert("추가 완료하였습니다.");
        this.$router.go(this.$router.currentRout);
      } catch (error) {
        alert(error.message);
      }
    },
    closeModal() {
      this.$emit("handle-modal");
    },
  },
};
</script>

<style lang="scss" scoped>
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

  h2 {
    color: black;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;

    input,
    textarea {
      border: 1px solid black;
      border-radius: 5px;
      padding: 8px;
      box-sizing: border-box;
    }

    textarea {
      height: 100%;
    }
  }
  .close-button {
    position: absolute;
    right: 20px;
    background-color: black;
    width: 30px;
    border-radius: 50%;
    height: 30px;
  }

  .add-button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #388e3c;
    }
  }
}
</style>
