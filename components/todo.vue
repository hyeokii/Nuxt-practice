<template>
  <div>
    {{ data.title }} <span class="name">{{ data.userNm }}</span>
    <div class="box-btn">
      <template v-if="loginId == data.loginId">
        <button type="button" @click="dltBtn(data)" class="btn">삭제</button>
      </template>
      <button type="button" @click="evtBtn(data)" class="btn">자세히</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Todo",
  props: {
    data: {
      type: Object,
      defaultValue: undefined,
    },
    loginId: {
      type: Object,
      defaultValue: undefined,
    },
  },
  data() {
    return {
      dataList: [],
    };
  },
  created() {},
  mounted() {},
  methods: {
    evtBtn(arg) {
      console.log(arg);
      this.$router.push({ path: "/todo/_id", query: { id: arg.id } });
    },
    dltBtn(arg) {
      // console.log(arg);
      //해당 라인 삭제하기
      if (confirm("정말 삭제하시겠습니까?")) {
        this.$axios.delete("http://localhost:3001/todoList/" + arg.id);
        this.$router.go(this.$router.currentRout);
      }
    },
  },
  // useMemo
  computed: {},
};
</script>
<style scoped lang="scss"></style>
