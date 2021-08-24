<template>
	<view>
		<u-cell-group>
			<u-cell-item icon="account" title="人脸注册" :arrow="true" iconSize="42rpx" @click="goTo('../C/C')">
			</u-cell-item>
			<u-cell-item icon="lock" title="修改密码" :arrow="true" iconSize="42rpx" @click="goTo('../C/C')">
			</u-cell-item>
			<u-cell-item icon="share" title="关于我们" :arrow="true" iconSize="42rpx" @click="goTo('../C/C')">
			</u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 111
			}
		},
		onLoad() {},
		methods: {
			goTo(url) {
				uni.navigateTo({
					url: url
				})
			}
		},
		computed: {}
	}
</script>

<style scoped lang="scss">
	.content0 {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 70rpx;
	}

	.content1 {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 0rpx;
		margin-bottom: 0rpx;
	}

	.text-title {
		display: flex;
		flex-direction: column;
		justify-content: left;
		font-size: 40rpx;
		align-items: left;
		margin-bottom: 20rpx;
		margin-left: 80rpx;
	}

	.text-area {
		display: flex;
		justify-content: left;
		font-size: 40rpx;
	}

	//头像裁剪
	.wrap {
		padding: 40rpx;
	}

	.u-avatar-wrap {
		margin-top: 80rpx;
		overflow: hidden;
		margin-bottom: 80rpx;
		text-align: center;
	}

	.u-avatar-demo {
		width: 200rpx;
		height: 200rpx;
		border-radius: 100rpx;
	}
</style>
