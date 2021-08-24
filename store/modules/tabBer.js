
//在当前模块下面那些数据需要被管理
const state = {
	tabList: []
}
 
//改变数据方法的集合(同步方式)
const mutations = {
		//修改某个数据的方法
        updateTablist(state, n) {
            state.tabList = n
        }	
}
 
 
export default {
	namespaced: true,
	state,
	mutations
}