import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
Vue.use(Vuex);
export default new Vuex.Store({
	modules:{
		login
	},
	state:{
		scrollLoadHieght:200,
		index:1
	},
	getters:{
		scrollLoadHieght(state){
			return state.scrollLoadHieght + 1;
		}
	},
	mutations:{
		increase(state,value){
			state.scrollLoadHieght += value;
		}
	},
	actions:{
		increaseMore(context){
			context.commit('increase');
		}
	}
});