import Vue from 'vue';
import App from './App';
import router from './router';
import infiniteScroll from 'vue-infinite-scroll';
import vueLazyload from 'vue-lazyload';
import FastClick from 'fastclick';
/*import store from './store';*/
import '@/assets/js/lib-flexible';
import Util from '@/assets/js/util';

Vue.config.productionTip = false;
//解决300毫秒点击问题
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
//懒加载
Vue.use(vueLazyload, {
	preLoad: 1.3,
	error: require('@/assets/images/default-img.png'),
	loading: require('@/assets/images/default-img.png'),//防止url的问题
	attempt: 3,
	listenEvents: [ 'scroll' ]
});
Vue.use(infiniteScroll);
Vue.use(Util);
new Vue({
  el: '#app',
  router,
/*  store,*/
  components: { App },
  template: '<App/>'
})
