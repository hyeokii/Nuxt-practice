<template>

</template>
<script>
export default {
  name: 'todoDetail',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  async asyncData({$axios, route}) {
    console.log(route.params.id)
  },
  created() {

  },
  mounted() {

  }
}
</script>
