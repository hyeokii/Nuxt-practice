<template>
  <div class="todoItemBox">
    <div class="todoContents" :class="{ completed: data.status === '2' }">
      <input
        type="checkbox"
        style="zoom: 1.5"
        v-model="data.checked"
        @change="onClick"
      />
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
        alert("삭제 되었습니다.");
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
</style>
