<template>
  <div class="pg-todo">
    <h2 class="pg-tit">TODOLIST</h2>
    <Todo-Add />
    <ul class="list-todo">
      <Todo
        v-for="(data, index) in dataList"
        :data="data"
        v-bind:key="`${index}_${data.id}`"
      />
    </ul>
  </div>
</template>

<script>
// import { addCommaFilter } from "@/utils/test-utils";
// import testMixins from "@/mixins/test-mixins";

export default {
  layout: "Todopage",
  // filters: { addCommaFilter },
  // mixins: [testMixins],
  // Serverside, pages Only
  async asyncData({ $axios }) {
    const data = await $axios.get("http://localhost:3001/todoList");
    return {
      dataList: data.data,
    };
  },
  data() {
    return {
      dataList: [],
      id: null,
    };
  },
  created() {
    // client 여부 체크
    // console.log("window?", typeof window);
    // console.log("data", this.dataList);
  },
  // client
  mounted() {
    // console.log(this.$options.filters.addCommaFilter(11111));
    // console.log("test", this.testNm);
    // console.log("data", this.dataList);
  },
  // useCallback
  methods: {},
  // useMemo
  computed: {},
};
</script>

<style lang="scss">
.list-todo {
  padding: 0;
  margin-top: 30px;
  width: 100%;
  li {
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    &:first-child {
      margin-top: 0;
    }
    .name {
      margin-left: 20px;
    }
    .box-btn {
      margin-left: auto;
    }
  }
}
</style>
