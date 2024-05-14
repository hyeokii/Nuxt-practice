<template>
  <div class="sort-area">
		<div class="select">
			<select @change="$emit('getSelectData', changeEvent($event) )"> <!-- on change methods -->
				<option value="recent" :selected="sortType === 'recent'">최신순</option>
				<option value="close" :selected="sortType === 'close'">마감순</option>
			</select>		
		</div>
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
		.select {			
			width:120px;			
		}		
	}
</style>

