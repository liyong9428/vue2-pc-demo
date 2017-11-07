import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入getters、mutations、actions
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// 定义state
const state = {
	count: '这是一个新建的项目'
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
