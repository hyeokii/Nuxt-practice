<template>
  <div class="sort-area">
		<select>
			<option>1</option>
			<option>1</option>
			<option>1</option>
		</select>
		<select>
			<option>1-2</option>
			<option>1-2</option>
			<option>1-2</option>
			<option>1-2</option>
		</select>
	</div>
</template>
<script>
export default {
  name: "SortArea",
  props: {
    
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {    
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
	}
</style>

