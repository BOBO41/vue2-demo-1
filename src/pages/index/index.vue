<template>
	<div class="page-city">
		<swiper :options="swiperOption" class="swiper-box">
	       <swiper-slide class="swiper-item">
	           <img src="../../assets/img_city_350500@2x.png" alt="">
	       </swiper-slide>
	       <swiper-slide class="swiper-item">
	           <img src="../../assets/img_city_350900@2x.png" alt="">
	       </swiper-slide>
	       <div class="swiper-pagination" slot="pagination"></div>
	   </swiper>
	   <div class="top-nav">
			<router-link :to="{name:'list', params: {type:1}}">
				<i class="icon-city-dine"></i>
				<span>美食</span>
			</router-link>
			<router-link :to="{name:'list', params:{type:2}}">
				<i class="icon-city-hotel"></i>
				<span>酒店</span>
			</router-link>
			<router-link :to="{name:'list', params:{type:3}}">
				<i class="icon-city-tour"></i>
				<span>观光</span>
			</router-link>
	    </div>
	    <div class="city-item nearby-sence">
	    	<h2 class="title"><i class="icon-nearby-sence"></i>附近的美食</h2>
	    	<div class="nearby-sence-con">
	    		<div class="nearby-sence-item" v-for="(item,index) in foods">
		            <router-link :to="{name:'detail',params:{id:index}}">
		            	<img v-lazy="item.pic">
		            </router-link>
		            <div class="nearby-sence-item-title">
						<span class="place">{{item.name}}</span>
		            </div>
	          </div>
	    	</div>
	    </div>
	    <router-view></router-view>
	    <ly-footer></ly-footer>
	</div>
</template>
<script>
import lyFooter from '../../components/footer';
import '../../../static/lib/swiper/swiper.min.css';
import list from '../../assets/data.json';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default{
	components: {
		foods:[],
		lyFooter,
	  	swiper,
	  	swiperSlide
	},
	created(){
        this.initData();
    },
	data(){
		return{
			swiperOption: {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop : true,
                autoplay : 3000
            }
		}
	},
	methods:{
		initData(){
			this.foods = list.list;
		}
	}
}
</script>
<style lang="less" scoped>
@import 'index.less';
</style>