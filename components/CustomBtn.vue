<template>
  <button
    :class="['btn', buttonType]"
    @click="handleClick"
    :disabled="isDisabled"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: String,
    buttonType: String,
    isDisabled: Boolean,
    onClick: Function,
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  border: 1px solid white;
}
.updateBtn {
  background-color: #337ab7;

  &:hover {
    background-color: #256ead;
  }
}
.deleteBtn {
  background-color: #a94442;

  &:hover {
    background-color: #a9302e;
  }
}

.saveBtn {
  border: 1px solid white;
  background-color: #3c763d;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;

  &:hover {
    background-color: #247425;
  }
}

button:disabled {
  background-color: #777777;
  color: black;
}
</style>
