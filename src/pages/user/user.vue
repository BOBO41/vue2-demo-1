<template>
	<div class="page-user">
		<img class="headpic" src="../../assets/headpic.png" alt="">
		<p>你好，欢迎!</p>
		<ly-footer></ly-footer>
	</div>
</template>
<script>
    import lyFooter from '../../components/footer';
	export default{
		components:{
			lyFooter
		}
	}
</script>
<style lang="less" scope>
.page-user{
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;
	color:#00b7ff;
	font-size:32px;
	.headpic{
		width:200px;
		height:200px;
		margin-bottom:30px;
		box-shadow:0 0 30px #ccc;
		border-radius:50%;
	}
}
</style>