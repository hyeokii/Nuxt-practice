<template>
  <div>
    <div class="backdrop" @click="closeModal"></div>
    <div class="editModal">
      <h2>수정하기</h2>
      <div class="input-container">
        <input type="text" v-model="newData.title" placeholder="제목" />
        <input type="text" v-model="newData.contents" placeholder="내용" />
      </div>
      <button class="update-button" @click="updateData">완료</button>
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
      const currentTime = new Date();
      this.newData.updatedDtm = currentTime.toISOString();
      await this.$axios.put(
        `http://localhost:3001/todoList/${this.todo.id}`,
        this.newData
      );
      alert("수정완료하였습니다.");
      this.$emit("edit-todo", this.newData);
      this.$emit("handle-modal");
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

.editModal {
  position: fixed;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.editModal h2 {
  color: black;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.editModal input {
  border: 1px solid black;
  border-radius: 5px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

.update-button {
  background-color: white;
  color: blue;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.update-button:hover {
  background-color: #f0f0f0;
}
</style>
