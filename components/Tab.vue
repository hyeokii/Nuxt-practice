<template>
  <button
    type="button"
    :index="`tab-${index}`"
    :class="{ on: index === currentTab }"
    @click="$emit('tabClicked', index)"
  >
    <slot></slot>      
  </button>
</template>
<script>
export default {
  name: "Tab",
  props: {   
    currentTab: {
      type: Number,
      default: 0,
    },
    index : {
      type:Number,
      default:null
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {     
    changeTab(index) {
      this.currentTab = index;
    },
  },
  computed: {
  },
  watch: {
    currentTab: {
      handler(newVal, oldVal) {
        // console.log(newVal, oldVal)
      }
    }
  }
};
</script>