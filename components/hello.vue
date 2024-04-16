<template>
  <div class="box-login">
    <input
      type="text"
      class="inp-text"
      placeholder="아이디를 입력해 주세요."
      id="inp-login"
    />
    <button type="button" class="btn" @click="login">로그인</button>
  </div>
</template>
<script>
export default {
  name: "helloComponent",
  props: {},
  data() {
    return {
      currentUser: null,
    };
  },
  // async asyncData({ $axios, route }) {

  //   return {
  //     currentUser: null,
  //   };
  // },
  methods: {
    async login() {
      const userId = document.querySelector("#inp-login").value;
      const userData = await this.$axios.get(
        "http://localhost:3001/users?loginId=" + userId
      );
      // console.log(userData.data[0].id);
      this.$axios.put("http://localhost:3001/currentUser", {
        id: userData.data[0].id,
      });
      this.$router.push({ path: "/todo" });
      alert("환영합니다! " + userData.data[0].userNm + "님");
    },
  },
};
</script>
<style lang="scss">
.box-login {
  margin-top: 30px;
  .btn {
    margin: 0 5px;
  }
}
</style>
