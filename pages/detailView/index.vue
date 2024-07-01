<template>
  <Thumbnail :goodsDetail="goodsDetail" :goodsNo="goodsNo"></Thumbnail>
</template>

<script>
import Thumbnail from '../../components/PM/thumbnail.vue';

export default {
  components: {
    Thumbnail
  },
  async asyncData({$axios, route}) {
    const getGoodsData = await $axios.get('http://localhost:3001/payload')
    try {
      let goodsNo = route.params.goodsNo
      return {
        goodsDetailBase: getGoodsData.data.prGoodsBase,
        goodsBrandInfo: getGoodsData.data.prBrandMst,
        goodsThumbCont: getGoodsData.data.prGoodsContInfo,
        goodsNo: goodsNo
      }
    } catch {
      console.log('error')
    }
    
  },
  data() {
    return {
      goodsDetailBase: [],
      goodsBrandInfo: [],
      goodsThumbCont: [], 
      goodsDetail:[],
      goodsNo:'10795517',
    }
  },
  created() {
    this.goodsDetail = Object.assign({}, this.goodsThumbCont);
    console.log (this.goodsDetail)
  }
  
}
</script>

<style>


</style>