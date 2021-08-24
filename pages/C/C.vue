<template>
	<view>
		<view class="content">
			<!--
		<view class="content0">
			<u-image class="pod" height="200rpx" width="200rpx" shape="circle" src="/static/Userimg.jpg"></u-image>
			<u-line color="#000000" margin="50rpx"></u-line>
		</view>
		-->
			<!--头像裁剪-->
			<view class="wrap">
				<view class="u-avatar-wrap">
					<image class="u-avatar-demo" :src="avatar" mode="aspectFill"></image>
				</view>
				<u-button @tap="chooseAvatar">更换头像</u-button>
			</view>
			<!--个人资料-->
			<view>
				<view class="text-title">姓名：&#160&#160&#160&#160&#160&#160&#160&#160{{Username}}</view>
				<view class="content1">
					<u-line color="#000000" margin="30rpx"></u-line>
				</view>
				<view class="text-title">部门：&#160&#160&#160&#160&#160&#160&#160&#160{{Deptname}}</view>
				<view class="content1">
					<u-line color="#000000" margin="30rpx"></u-line>
				</view>
				<view class="text-title">职位：&#160&#160&#160&#160&#160&#160&#160&#160{{Jobtitle}}</view>
				<view class="content1">
					<u-line color="#000000" margin="30rpx"></u-line>
				</view>
				<view class="text-title">工号：&#160&#160&#160&#160&#160&#160&#160&#160{{Userid}}</view>
			</view>
			<view class="content1">
				<u-line color="#000000" margin="50rpx"></u-line>
			</view>

			<u-cell-group>
				<u-cell-item icon="setting-fill" title="设置" :arrow="true" iconSize="42rpx"
					@click="goTo('../settings/Settings')"></u-cell-item>
			</u-cell-group>

			<!--
			<button type="primary" @click="goto('../settings/Settings')">设置</button>
			-->
		</view>
		<!--tabBar-->
		<u-tabbar :list="tabList" active-color="#5098FF" inactive-color="#909399" :border-top=false bg-color="#F8F8F8">
		</u-tabbar>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				Username: "李四",
				Deptname: "研发部",
				Jobtitle: "经理",
				Userid: 126985,
				avatar: '/static/Userimg.jpg'
			}
		},
		async onLoad() {
		   var  rs = 	await this.getStudentList();
		   //把数据赋值给相应的展示组件
		   console.log(rs.data)
		   console.log(222)

		},
		computed: {
			...mapGetters([
				'tabList'
			])
		},
		created() {
			// 监听从裁剪页发布的事件，获得裁剪结果
			uni.$on('uAvatarCropper', path => {
				this.avatar = path;
				// 可以在此上传到服务端
				uni.uploadFile({
					url: 'http://www.example.com/upload',
					filePath: path,
					name: 'file',
					complete: (res) => {
						console.log(res);
					}
				});
			})
		},
		methods: {
			getStudentList() {
				return new Promise((resolve, reject) => {
					uni.request({
						url: 'https://www.fastmock.site/mock/755801392c485cacb40399493a4ed742/wwj/getProductInfos',
						success: (res) => {
							//1.请的结果是在respones中
							console.log(res)
							//2.通过resolve传递respones的结果
							resolve(res.data);
						}
					});
				})
			},
			chooseAvatar() {
				// 此为uView的跳转方法，详见"文档-JS"部分，也可以用uni的uni.navigateTo
				this.$u.route({
					// 关于此路径，请见下方"注意事项"
					//换路径
					url: '/uview-ui/components/u-avatar-cropper/u-avatar-cropper',
					// 内部已设置以下默认参数值，可不传这些参数
					params: {
						// 输出图片宽度，高等于宽，单位px
						destWidth: 300,
						// 裁剪框宽度，高等于宽，单位px
						rectWidth: 200,
						// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
						fileType: 'jpg',
					}
				})
			},
			goTo(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
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
