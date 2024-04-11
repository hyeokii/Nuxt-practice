<template>

</template>
<script>
export default {
  name: 'todoDetail',
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
