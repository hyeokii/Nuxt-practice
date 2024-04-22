<template>
  <div>
    <button
      v-for="(goods, idx) in goodsListData"
      :key="idx"
      @click="currentTab = `Tab${idx + 1}`"
    >
      {{ goods.contentInfoList[0].textList[0].contTitleNm }}
    </button>

    <component :is="currentTab"></component>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";
import Tab3 from "./Tab3.vue";

export default {
  components: {
    Tab1,
    Tab2,
    Tab3,
  },
  computed: {
    ...mapState(["goodsListData"]),
  },
  data() {
    return {
      currentTab: "Tab1", // 초기에는 Tab1을 선택
    };
  },
};
</script>
