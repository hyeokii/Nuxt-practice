<template>
  <div class="list-todo">
    <h2 class="pg-tit">TODOLIST</h2>
    <ul>
      <li v-for="(data, index) in dataList" v-bind:key="`${index}_${data.id}`">
        {{ data.title }} <span class="name">{{ data.userNm }}</span>
        <button type="button" @click="testMethods(data)" class="btn">
          자세히
        </button>
      </li>
    </ul>
    <!-- <Hello :test-name="lastClicked" /> -->
  </div>
</template>

<script>
// import { addCommaFilter } from "@/utils/test-utils";
// import testMixins from "@/mixins/test-mixins";

export default {
  name: "MainPage",
  // filters: { addCommaFilter },
  // mixins: [testMixins],
  // Serverside, pages Only
  async asyncData({ $axios }) {
    const data = await $axios.get("http://localhost:3001/todoList");
    return { dataList: data.data };
  },
  data() {
    return {
      dataList: [],
      // message: "안녕하세요",
      lastClicked: undefined,
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
  },
  // useCallback
  methods: {
    testMethods(arg) {
      // this.lastClicked = arg;
      this.$router.push({ path: "/todo/_id", query: { id: arg.id } });
    },
  },
  // useMemo
  computed: {
    testName() {},
  },
};
</script>

<style lang="scss">
.list-todo {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  margin: 100px auto 0;
  width: 800px;
  ul {
    padding: 0;
    width: 100%;
  }
  li {
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    &:first-child {
      margin-top: 30px;
    }
    .name {
      margin-left: 20px;
    }
    .btn {
      margin-left: auto;
    }
  }
}
</style>
