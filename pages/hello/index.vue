<template>
  <div @click="$router.push('/')" class="">
    {{ hi }}
    <Hello />
  </div>
</template>
<script>
export default {
  layout: "DefaultLayout",
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  data() {
    return {
      hello: "1",
    };
  },
  computed: {
    hi() {
      return `hi_${this.hello}`;
    },
  },
  methods: {},
  beforeRouteLeave(to, from, next) {
    alert(to.path);
    next();
  },
};
</script>

<style scoped lang="scss">
.main {
  .testhi {
    width: 50px;
    height: 50px;
    border: 1px solid blue;
  }
}
</style>
