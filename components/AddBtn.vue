<template>
  <div>
    <button @click="handleAddModal" class="add-button">리스트 추가</button>
    <AddModal
      v-if="isAddModal"
      :dataList="dataList"
      @add-todo="addTodoList"
      @handle-modal="handleAddModal"
    ></AddModal>
  </div>
</template>

<script>
import AddModal from "./AddModal.vue";

export default {
  components: {
    AddModal,
  },
  props: {
    dataList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return { isAddModal: false };
  },
  methods: {
    addTodoList(data) {
      this.dataList.push(data);
    },
    handleAddModal() {
      this.isAddModal = !this.isAddModal;
    },
  },
};
</script>

<style lang="scss" scoped>
.add-button {
  margin-top: 20px;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #388e3c;
  }
}
</style>
