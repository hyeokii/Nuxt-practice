<template>
  <div>
    <div class="backdrop" @click="closeModal"></div>
    <div class="editModal">
      <div class="input-container">
        <h2>수정하기</h2>
        <input type="text" v-model="newData.title" placeholder="제목" />
        <textarea type="text" v-model="newData.contents" placeholder="내용" />
        <button class="update-button" @click="updateData">완료</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    const { title, contents, updatedDtm, ...rest } = this.todo;
    return {
      newData: {
        title: this.todo.title,
        contents: this.todo.contents,
        ...rest,
      },
    };
  },
  methods: {
    async updateData() {
      try {
        const currentTime = new Date();
        this.newData.updatedDtm = currentTime.toISOString();
        await this.$axios.put(
          `http://localhost:3001/todoList/${this.todo.id}`,
          this.newData
        );
        alert("수정완료하였습니다.");
        this.$emit("edit-todo", this.newData);
        this.$emit("handle-modal");
      } catch (error) {
        console.error("수정 오류 방생", error);
        alert("수정 중 오류가 발생했습니다.");
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

.editModal {
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
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  input {
    border: 1px solid black;
    border-radius: 5px;
    padding: 8px;
    box-sizing: border-box;
  }
  textarea {
    border: 1px solid black;
    border-radius: 5px;
    padding: 8px;
    box-sizing: border-box;
    height: 100%;
  }
}
.update-button {
  background-color: #9accfd;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: skyblue;
  }
}
</style>
