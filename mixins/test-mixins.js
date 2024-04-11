export default {
  data() {
    return {
      testData: '111111'
    }
  },
  mounted() {
    console.log('mounted', this.testData)
  },
  computed: {
    testNm() {
      return Number(this.testData)
    }
  }
}
