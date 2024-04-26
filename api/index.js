import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

function fetchTodoList() {
  return instance.get("/todoList");
}

function getTodoItem(id) {
  return instance.get(`/todoList/${id}`);
}

function putTodoList(id, data) {
  return instance.put(`/todoList/${id}`, data);
}
function addTodoList(data) {
  return instance.post("todoList", data);
}

function deleteTodoList(id) {
  return instance.delete(`/todoList/${id}`);
}

function fetchCurrentId() {
  return instance.get("/currentUser");
}

function fetchUserName(id) {
  return instance.get(`/users/${id}`);
}

export {
  fetchTodoList,
  putTodoList,
  fetchCurrentId,
  fetchUserName,
  addTodoList,
  deleteTodoList,
  getTodoItem,
};
