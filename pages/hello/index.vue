<template>
  <div class="pg-hello">
    <h2 class="tit">HELLO</h2>
    <Hello />
    <!-- {{ hi }} -->
  </div>
</template>
<script>
export default {
  layout: "Hello",
  created() {
    // console.log("created");
  },
  mounted() {
    // console.log("mounted");
  },
  data() {
    return {
      // hello: "1",
    };
  },
  computed: {
    // hi() {
    //   return `hi_${this.hello}`;
    // },
  },
  methods: {},
  beforeRouteLeave(to, from, next) {
    alert(to.path);
    next();
  },
};
</script>

<style scoped lang="scss">
.pg-hello {
}
</style>
