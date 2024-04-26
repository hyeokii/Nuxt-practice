<template>
  <div v-if="data.contentInfoList" class="menuContainer">
    <ul class="menuList">
      <li
        class="menuItem"
        v-for="(menu, idx) in menuData"
        :key="idx"
        @click="routeToUrl(menu.contentInfoList[1].textList[0].linkUrlAddr)"
      >
        <span class="menuIcon"></span>
        <span class="menuText">{{
          menu.contentInfoList[1].textList[0].contTitleNm
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["menuData"]),
  },
  methods: {
    routeToUrl(url) {
      alert(`${url}로 이동`);
    },
  },
};
</script>

<style lang="scss" scoped>
.menuContainer {
  margin-bottom: 5rem;
  width: 100%;
}

.menuList {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5rem;
}

.menuItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  cursor: pointer;
}

.menuIcon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 40%;
}
</style>
