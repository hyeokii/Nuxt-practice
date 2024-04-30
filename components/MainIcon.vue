<template>
  <div class="Icon-wrapper">
    <div class="">
      <div class="Icon-list">
        <div v-for="item in res.setList" :key="item.dispSetSeq">
          <div
            @click="
              handleAlert(item.contentInfoList[0].imageList[0].linkUrlAddr)
            "
            class="Icon-item"
          >
            <div class="Icon-image">
              <img
                :src="
                  imageUrl(item.contentInfoList[0].imageList[0].pcContPathNm)
                "
              />
            </div>
            <div class="Icon-span">
              {{ item.contentInfoList[1].textList[0].contTitleNm }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    res: {
      type: Object,
      required: true,
    },
  },
  methods: {
    imageUrl(src) {
      return `https://img-stg.x2bee.com/${src}`;
    },
    handleAlert(src) {
      alert(`${src}로 이동`);
    },
  },
};
</script>

<style lang="scss" scoped>
.Icon-wrapper {
  width: 100%;
  margin: 0 auto 80px;
  padding: 0 40px;
  .Icon-list {
    display: flex;
    justify-content: space-around;
    align-content: center;
    margin: 0 80px;
    .Icon-item {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      width: 54px;
      height: 82px;
      .Icon-image {
        background-color: #f8f8f8;
        border-radius: 20px;
        width: 100%;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 32px;
          height: 32px;
        }
      }
      .Icon-span {
        margin-top: 0.5rem;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
      }
    }
  }
}
@media ($desktop) {
  .Icon-wrapper {
    width: 1280px;
  }
}
</style>
