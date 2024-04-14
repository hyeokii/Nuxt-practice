<template>
  <div class="container">
    <h1>Todo List</h1>
    <div>
      <div v-for="list in dataList" :key="list.id" class="list-item">
        <nuxt-link :to="'/todo/' + list.id" class="list-link"
          ><span class="list-span">{{ list.userNm }}</span
          ><span class="list-span">{{ list.title }}</span>
          <span class="list-span">{{ list.contents }}</span></nuxt-link
        >
      </div>
    </div>
    <button @click="handleAddModal" class="add-button">리스트 추가</button>
    <AddTodo
      v-if="isAddModal"
      :dataList="dataList"
      @add-todo="addTodoList"
      @handle-modal="handleAddModal"
    ></AddTodo>
  </div>
</template>
<script>
import AddTodo from "../../components/AddTodo.vue";
export default {
  name: "MainPage",
  components: {
    AddTodo,
  },
  data() {
    return {
      dataList: [],
      isAddModal: false,
    };
  },

  async asyncData({ $axios }) {
    const res = await $axios.get("http://localhost:3001/todoList");
    return { dataList: res.data };
  },
  methods: {
    addTodoList(data) {
      this.dataList.push(data);
    },
    handleAddModal() {
      this.isAddModal = !this.isAddModal;
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-item {
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  transition: transform 0.3s ease;
}

.list-item:hover {
  transform: translateY(-2px);
}

.list-link {
  padding: 10px 0;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  width: 100%;
}

.list-span {
  text-align: center;
  flex: 1;
}

.add-button {
  margin-top: 20px;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #388e3c;
}
</style>
