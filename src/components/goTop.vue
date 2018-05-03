<!-- 回到顶部组件 -->
<template>
	<i @click="goTop()" v-if="isShowTop" class="icon go_top"></i>
</template>
<script>
    import {showTop,goTop} from '../utils/util';
	export default{
		data(){
			return{
				isShowTop:false
			}
		},
		created(){
			showTop((status) => {
                this.isShowTop = status;
            });
		},
		methods:{
			goTop(){
				goTop();
			}
		}
	}
</script>