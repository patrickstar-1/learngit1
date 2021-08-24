
<template>
	<view class="content">
		<view class="main-box">
			文件管理页面内容
		</view>
		<u-tabbar
			:list="tabList"
			active-color="#5098FF"
			inactive-color="#909399"
			:border-top= false
			bg-color = "#F8F8F8"
		></u-tabbar>
	</view>
</template>
 
<script>
	import { mapGetters } from 'vuex'
	export default {
		data() {
			return {
			
			}
		},
		computed: {
			...mapGetters([
				'tabList'
			])
		}
	}
</script>
 
<style scoped lang="scss">
 
</style>
