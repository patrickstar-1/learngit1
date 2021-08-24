<template>
	<view>
		<u-input v-model="value" :type="type" :border="border" />
		<u-button @click="login">登录</u-button>
	</view>
</template>

<script>
	import datalist from '../../mockdata/datalist.js'
	export default {
		data() {
			return {
				value: '',
				type: 'text',
				border: true
			}
		},
		onLoad() {

		},
		methods: {
			login(){
					//1.获取不同用户的tablist并且去赋值 （有可能自己固定的,也有可能是从后端那边获取）
					this.$store.commit('tabBer/updateTablist', datalist.testABar)
					//2.切换需要第一次被展示的tab选项卡上面
					uni.switchTab({
						url:'../A/A'
					})
			}
		}
	}
</script>

<style>

</style>
