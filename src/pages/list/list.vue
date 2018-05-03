<template>	
	<div class="page-shop">
		<my-header :title="type[$route.params.type - 1]" isSearch="true" @search="search"></my-header>	
		<div class="lt-block">
			<div class="shop-list">
				<router-link v-for="(item,index) in list" :to="{name:'detail',params:{id:index}}">
					<div class="shop-img">
						<img class="lazyload" v-lazy="item.pic">
					</div>
					<div class="shop-info">
						<div class="shop-title">
							<div class="name">{{item.name}}</div>
							<div class="price">
								<em>￥</em>{{item.price}}<em>起</em>		
							</div>
						</div>
						<p class="content">
						</p>
						<p class="content">地址：{{item.address}}</p>
						<p class="content">电话：{{item.tel}}</p>
					</div>	
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
import myHeader from '../../components/header';
import list from '../../assets/data.json';
export default{
	components:{
		myHeader
	},
	created(){
		this.fetchData();
	},
	data(){
		return{
			list:[],
			type:['美食','酒店','观光','娱乐','购物']
		}
	},
	methods:{
		fetchData(){
			this.list = list.list;
		},
		search(){
			this.toast('暂未开放');
		}
	}
}
</script>
<style lang="less" scoped>
@import 'list.less';
</style>