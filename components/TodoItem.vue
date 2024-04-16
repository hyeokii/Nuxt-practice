<template>
  <div class="todoContents" :class="{ completed: data.status === '2' }">
    <input
      type="checkbox"
      style="zoom: 1.5"
      v-model="data.checked"
      @change="toggleStatus(data)"
    />
    <div class="text">
      <span>{{ data.contents }}</span>
    </div>
    <span>{{ data.userNm }}</span>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
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
</style>
