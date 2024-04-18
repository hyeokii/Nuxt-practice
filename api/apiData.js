import axios from "axios";

const API_BASE_URL = "http://localhost:3001/todoList";

export default {
  async fetchTodos() {
    return axios.get(API_BASE_URL);
  },

  async addTodo(newTodo) {
    return axios.post(API_BASE_URL, newTodo);
  },

  async deleteTodo(todoId) {
    return axios.delete(`${API_BASE_URL}/${todoId}`);
  },

  async updateTodo(todoId, updatedData) {
    return axios.put(`${API_BASE_URL}/${todoId}`, updatedData);
  },

  async toggleTodoStatus(todoId, status) {
    return axios.patch(`${API_BASE_URL}/${todoId}`, {
      status: status,
    });
  },
};
