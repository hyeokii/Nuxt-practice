<template>
  <div class="sort-area">
		<select @change="$emit('getSelectData', changeEvent($event) )" v-model="this.sortType"> <!-- on change methods -->
			<option value="recent">최신순</option>
			<option value="close">마감순</option>
		</select>		
	</div>
</template>
<script>
export default {
  name: "SortArea",
  props: {
    getSelectData: {
			type: String,
			defaultValue: undefined,
		},
		sortType: {
			type: String,
			defaultValue: undefined
		}
  },
  data() {
    return {
		};
  },
  created() {},
  mounted() {},
  methods: {    
		changeEvent(event) {
			return event.target.value
		}
  },
  computed: {
  }
};
</script>
<style scoped lang="scss">
  .sort-area {
		display:flex;
		gap:0 8px;
		justify-content: flex-end;
		margin-top:20px;
		select {
			position: relative;
			width:120px;
			border:1px solid #E5E5E5;
		}
	}
</style>

