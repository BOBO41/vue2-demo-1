<template> 
    <div class="page-login">   
        <div class="lt-block page-login">
            <h1>请输入手机和密码,测试账号:13612345678 123456</h1>
            <div class="login">
                <div class="input-row">
                    <input type="number" placeholder="请输入您的手机号码" maxlength="11" v-model.trim="tel" @input="setBtn()">
                </div>
                <div class="input-row">
                    <input type="password" placeholder="请输入密码" v-model.trim="password" @input="setBtn()">
                </div>
            </div>
            <div class="btn">
                <input type="submit" value="立即注册" :class="{'btn-disable' : isLogin != true}" id="submit-btn" @click="login()">
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            tel:"",
            isLogin:false,
            password:"",
            isTel:/^((\+?86)|(\(\+86\)))?(((1[3,4,5,7,8][0-9]))\d{8})$/
        }
    },
    methods:{
        //登录
        login(){
            if(!this.tel.match(this.isTel)){
                this.$toast('请输入正确的手机号码');
            }else if(this.tel != 13612345678){
                this.$toast('手机号码不存在');
            }
            else if(this.password != 123456){
                this.$toast('请输入正确的密码');
            }
            else{
                this.$toast('登录成功',1000);
                this.$cookie.set('token',Date().now);
                setTimeout(()=>{
                    this.$router.push(this.$route.query.redirect);
                },1000);
            }
        },
        setBtn(){
            if(this.tel !='' && this.password != ''){
                this.isLogin = true;
            }else{
                this.isLogin = false;
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import 'login.less';
</style>