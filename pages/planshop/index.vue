<template>
  <v-card>
    <v-tabs v-model="tab">
      <v-tab v-for="(item, idx) in items" :key="`tab_${item}${idx}`">{{ item.title }}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(item, idx) in items" :key="`tab_${item}${idx}`" class="tab-cont">
        {{ item.desc }}
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  layout: 'DefaultLayout',
  data: ()  => ({
    tab: null,
    items: [
      {
        title: 'tab1',
        desc: 'tab1-contents'
      },
      {
        title: 'tab2',
        desc: 'tab2-contents'
      }
    ]
  })
}
</script>

<style lang="scss">
.tab-cont {
  color: #FFF
}
</style>