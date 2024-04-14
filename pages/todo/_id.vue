<template>
<div>
  {{ todoDetail.title }}
  {{ todoDetail.contents }}
  {{ todoDetail.userNm }}
  <div v-if="todoDetail.id == currentUser">
    <button type="button" @click="modify">수정</button>
    <div class="box-modify">
      <input type="text" value="" id="inpText" placehoder="수정해 주세요."/>
      <button type="button" @click="update">확인</button>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'todoDetail',
  data() {
    return {
      id : null, 
      todoDetail : null,
      currentUser : null
    }
  },
  async asyncData({$axios, route}) {
    const id = route.query.id;
    const data = await $axios.get('http://localhost:3001/todoList?id='+id);
    const currentData = await $axios.get('http://localhost:3001/currentUser');
    return {todoDetail : data.data[0], id : id , currentUser : currentData.data.id}
  },
  created() {

  },
  mounted() {

  },
  methods : {
    modify() {
      const boxModi = document.querySelector('.box-modify')
      boxModi.classList.toggle('on');
    },
    update() {
      const inpvalue = document.querySelector('#inpText');
      this.todoDetail.contents = inpvalue.value;
      this.todoDetail.updatedDtm = new Date();
      this.$axios.put('http://localhost:3001/todoList/'+this.id, this.todoDetail);
    }
  }
}
</script>
<style lang="scss">
.box-modify {
  display: none;
  input {
    border:1px solid white;
    color:white;
  }
  &.on {
    display: block;
  }
}
</style>
