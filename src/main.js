import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import infiniteScroll from 'vue-infinite-scroll';
import vueLazyload from 'vue-lazyload';
import FastClick from 'fastclick';
import store from './store';
import './utils/lib-flexible';//移动端使用
import plugin from './utils/plugin';
Vue.use(infiniteScroll);
Vue.use(plugin);
//懒加载
Vue.use(vueLazyload, {
	preLoad: 1.3,
	error: require('./assets/default-img.png'),
	loading: require('./assets/default-img.png'),//防止url的问题
	attempt: 3,
	listenEvents: [ 'scroll' ]
});
Vue.prototype.$http = axios;
//解决300毫秒点击问题
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
Vue.config.productionTip = false;
//首次渲染app模板
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
});

