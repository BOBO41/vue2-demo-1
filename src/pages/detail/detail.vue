<template>
	<div class="page-detail">
		<my-header></my-header>
		<div class="lt-block main">
			<img :src="pic" alt="">
			<div class="info-box">
				<p class="title">{{name}}</p>
				<p class="tel"><a :href="'tel:'+tel"></a><span class="icon-box"><i class="icon-hotel-phone"></i></span>{{tel}}</a></p>
				<p><span class="icon-box"><i class="icon-guide"></i></span>{{address}}</p>
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
		data(){
			return{
				item:list.list[this.$route.params.id],
				pic:list.list[this.$route.params.id]['pic'],
				name:list.list[this.$route.params.id]['name'],
				tel:list.list[this.$route.params.id]['tel'],
				address:list.list[this.$route.params.id]['address']
			}
		}
	}
</script>
<style lang="less" scope>
	.page-detail{
		.main{
			img{
				width:100%;
			}
		}
		.info-box{
			padding:20px;
			p{
				display:flex;
				align-items:center;
				line-height:50px;
			}
			.tel{
				color:#00b7ff;
			}
			.icon-box{
				line-height:1;
				min-width:50px;
			}
		}
		.title{
			margin-bottom:10px;
			font-size:32px;
		}
	}
</style>