<template>
  <div class="pg-hello">
    <h2 class="tit">{{message}}</h2>
    <Hello />
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
      message:'HELLO'
    };
  },
  computed: {
    // hi() {
    //   return `hi_${this.hello}`;
    // },
  },
  methods: {},
  beforeRouteLeave(to, from, next) {
    // alert(to.path);
    next();
  },
};
</script>

<style lang="scss">
// .pg-hello {
// }
</style>
