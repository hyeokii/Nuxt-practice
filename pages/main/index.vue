<template>
  <div class="pg-main">
    <Keyvisual />
    <SectionTitle secTitle="주목해야할 브랜드" />
  </div>
</template>
<script>
export default {
  layout: "Main",
  created() {
    // console.log("created");
  },
  mounted() {
    // console.log("mounted");
  },
  data() {
    return {
      title: null,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.pg-main {
}
</style>
