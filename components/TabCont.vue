<template>
  <div class="tab-cont" v-for="(item,key) in tabCont" :key="`tab-${key}`" v-bind:key="`${item}_${data.id}`"> 
    {{ list.item }}
  </div>
</template>
<script>
export default {
  name: "TabCont",
  props: {
    tabcont: {
      type: Array,
      required: true,
    },
    currentTab: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
};
</script>
<style scoped lang="scss">
.tabs-cont {
  padding-top:40px;
}
</style>
