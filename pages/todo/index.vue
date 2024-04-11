<template>
  <div>
    {{ message }}
  </div>
</template>
<script>

export default {
  name: 'MainPage',
  data() {
    return {
      dataList: [],
      message: "안녕하세요"
    }
  },
  async asyncData({$axios}) {
  },
  created() {
    console.log('data', this.dataList)
  },
  mounted() {

  }
}
</script>
