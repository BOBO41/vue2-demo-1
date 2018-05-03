<template>
    <div id="app">
        <!-- 切入路由的动画 -->
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    export default {
        name:'app',
        data(){
            return{

            }
        }
    }
</script>
<style lang="less">
@import "./utils/base.less";
@import "./utils/layout.less";
@import "./utils/sprite.less";
</style>
