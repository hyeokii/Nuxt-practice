<template>
  <div class="todoItemBox">
    <div class="todoContents" :class="{ completed: data.status === '2' }">
      <label class="custom-checkbox">
        <input type="checkbox" v-model="data.checked" @change="onClick" />
        <span class="checkmark"></span>
      </label>
      <div class="text">
        <span>{{ data.contents }}</span>
      </div>
      <span>{{ data.userNm }}</span>
    </div>
    <div class="btnBox">
      <NuxtLink :to="`/todo/${data.id}`">
        <CustomBtn
          v-if="this.curUserName === data.userNm"
          :label="'수정'"
          buttonType="updateBtn"
          :isDisabled="data.status === '2'"
        />
      </NuxtLink>
      <CustomBtn
        v-if="this.curUserName === data.userNm"
        :label="'삭제'"
        buttonType="deleteBtn"
        :isDisabled="data.status === '2'"
        :onClick="() => confirmDelete(data.id)"
      />
    </div>
  </div>
</template>

<script>
import apiData from "@/api/apiData.js";
export default {
  props: {
    data: Object,
    onClick: Function,
    curUserName: String,
  },
  methods: {
    async deleteTodo(todoId) {
      try {
        await apiData.deleteTodo(todoId).then((res) => {
          this.$emit("deletedTodo", res.data.id);
          alert("삭제 되었습니다.");
        });
      } catch (err) {
        console.log("err", err);
      }
    },
    async confirmDelete(todoId) {
      if (!confirm("삭제하시겠습니까?")) {
        alert("취소 되었습니다.");
      } else {
        this.deleteTodo(todoId);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.todoItemBox {
  display: flex;
}

.todoContents {
  width: 300px;
  flex: 1 1 1;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.251);
  padding-bottom: 10px;
}

.text {
  width: 150px;
  display: flex;
  align-items: center;
  margin: 0 1rem;
}

.completed {
  text-decoration: line-through;
  color: #777777;
}

.btnBox {
  width: 160px;
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
  align-items: center;
}

.custom-checkbox {
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  user-select: none;
}

.custom-checkbox input {
  visibility: hidden;
}

.custom-checkbox .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: white;
  border-radius: 50%;
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #3c763d;
}

.custom-checkbox .checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}
</style>
