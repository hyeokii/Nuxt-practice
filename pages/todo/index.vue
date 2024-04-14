<template>
  <div>
    {{ message }} / {{ testName }}
    <template v-for="(data, index) in dataList">
      <button type="button" style="display: flex" @click="testMethods(data)" :key="`${index}_${data.id}`">
        {{ data.title }} / {{ data.userNm }}
      </button>
    </template>
    <Hello :test-name="lastClicked" />
  </div>
</template>

<script>

import {addCommaFilter} from "@/utils/test-utils";
import testMixins from "@/mixins/test-mixins";

export default {
  name: 'MainPage',
  filters: {addCommaFilter},
  mixins: [testMixins],
  // Serverside, pages Only
  async asyncData({$axios}) {
    const data = await $axios.get('http://localhost:3001/todoList')
    return { dataList: data.data, message: 'TodoList' }
  },
  watch: {

  },
  data() {
    return {
      dataList: [],
      message: '안녕하세요',
      lastClicked: undefined
    }
  },
  created() {
    // client 여부 체크
    console.log('window?', typeof window) 
    console.log('data', this.dataList)
  },
  // client
  mounted() {
    console.log(this.$options.filters.addCommaFilter(11111))
    console.log('test', this.testNm)
  },
  // useCallback
  methods: {
    testMethods(arg) {
      this.lastClicked = arg
      alert(`${arg}님`)
      this.$router.push({path:'/todo/_id', query: {id: arg.id}})
    }
  },
  // useMemo
  computed: {
    testName() {
      // return this.message + '444444'
    }
  }
}
</script>
<style lang="scss">
</style>
