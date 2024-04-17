<template>
  <li>
    {{ data.title }} <span class="name">{{ data.userNm }}</span>
    <div class="box-btn">
      <template>
        <button type="button" @click="dltBtn(data)" class="btn">삭제</button>
      </template>
      <button type="button" @click="evtBtn(data)" class="btn">자세히</button>
    </div>
  </li>
</template>
<script>
export default {
  name: "Todo",
  props: {
    data: {
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
      this.$router.push({ path: "/todo/_id", query: { id: arg.id } });
    },
    dltBtn(arg) {
      //해당 라인 삭제하기
    },
  },
  // useMemo
  computed: {},
};
</script>
<style scoped lang="scss"></style>
