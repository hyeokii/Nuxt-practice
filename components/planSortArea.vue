<template>
  <div class="sort-area">
		<div class="select">
			<select @change="$emit('getSelectData', changeEvent($event) )"> <!-- on change methods -->
				<option value="10" :selected="sortType === '10'">최신순</option>
				<option value="20" :selected="sortType === '20'">판매 많은 순</option>
				<option value="30" :selected="sortType === '30'">높은 가격 순</option>
				<option value="40" :selected="sortType === '40'">낮은 가격 순</option>
				<option value="50" :selected="sortType === '50'">상품평 많은 순</option>
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

