<template>
  <div class="pg-todo">
    <h2 class="pg-tit">{{ message }}</h2>
    <div class="top-area">
      <p class="cont-tit">{{ todoDetail.title }}</p>
      <p class="date">{{ dateFormatting() }}</p>
    </div>
    <div class="box-info">
      <span>해야할 사람 : {{ todoDetail.userNm }}</span>
      <template v-if="todoDetail.loginId == userId">
        <div class="box-modify">
          <input
            type="text"
            value=""
            id="inpText"
            placehoder=""
            class="inp-text"
          />
          <button type="button" @click="update" class="btn">확인</button>
        </div>
        <button type="button" @click="modify" class="btn">수정</button>
      </template>
    </div>
    <div class="box-cont">
      {{ todoDetail.contents }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoDetail",
  data() {
    return {
      id: null,
      todoDetail: null,
      currentUser: null,
      // userId : null
      message: "TODODETAIL",
    };
  },
  async asyncData({ $axios, route }) {
    const id = route.query.id;
    const dataId = await $axios.get("http://localhost:3001/todoList?id=" + id);
    const currentData = await $axios.get("http://localhost:3001/currentUser");
    const userData = await $axios.get(
      "http://localhost:3001/users?id=" + currentData.data.id
    ); // 로그인 한 아이디
    // console.log(userData);
    return {
      id: id,
      todoDetail: dataId.data[0],
      currentUser: currentData.data.id, // 현재 사용자의 id
      userId: userData.data[0].loginId, //로그인한 아이디의 loginId
    };
  },
  created() {},
  mounted() {},
  methods: {
    modify() {
      const boxModi = document.querySelector(".box-modify");
      boxModi.classList.toggle("on");
    },
    update() {
      const inpvalue = document.querySelector("#inpText");
      const boxModi = document.querySelector(".box-modify");
      this.todoDetail.contents = inpvalue.value;
      this.todoDetail.updatedDtm = new Date();
      this.$axios.put(
        "http://localhost:3001/todoList/" + this.id,
        this.todoDetail
      );
      inpvalue.value = null;
      boxModi.classList.remove("on");
    },
    dateFormatting() {
      const date = new Date(this.todoDetail.updatedDtm);
      return (
        date.getFullYear() +
        "년 " +
        (date.getMonth() + 1) +
        "월 " +
        date.getDate() +
        "일 "
      );
    },
  },
};
</script>

<style scoped lang="scss">
.top-area {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 30px;
  width: 100%;
  border-bottom: 1px solid white;
}
.cont-tit {
  margin: 0;
}
.box-modify {
  display: none;
  margin-left: auto;
  &.on {
    display: flex;
  }
  .inp-text + .btn {
    margin: 0 10px;
  }
}
.box-cont {
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  min-height: 300px;
  border: 1px solid white;
}
.box-info {
  margin-top: 15px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
</style>
