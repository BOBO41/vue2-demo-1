<template> 
    <div class="page-login">   
        <div class="lt-block page-login">
            <h1>请输入您的手机号码,一键完成注册和登录</h1>
            <div class="login">
                <div class="input-row">
                    <input type="text" class="input-clear" placeholder="请输入您的手机号码" name="mobile" oninput="this.value = this.value.replace(/\D/g, '')" maxlength="11" v-model.trim.lazy="tel" >
                </div>
                <div class="input-row">
                    <input type="text" placeholder="请输入验证码" name="verify_code" oninput="this.value = this.value.replace(/\D/g, '')" maxlength="6" v-model.trim.lazy="code">
                    <div class="auth">
                        <span @click="getCode()">获取验证码</span>
                    </div>
                </div>
            </div>
            <div class="btn">
                <input type="submit" value="立即注册" class="btn-disable" id="submit-btn" @click="login()">
            </div>
        </div>
    </div>
</template>
<script>
import {setCookie} from '../../utils/util';
export default{
    data(){
        return{
            tel:"",
            code:"",
            isTel:/^((\+?86)|(\(\+86\)))?(((1[3,4,5,7,8][0-9]))\d{8})$/
        }
    },
    methods:{
        //登录
        login(){
            if(!this.tel.match(this.isTel)){
                this.toast('请输入正确的手机号码');
            }else if(this.code !== '123456'){
                this.toast('请输入正确的验证码');
            }
            else{
                this.toast('登录成功',1000);
                setCookie('token',Date.now());
                setTimeout(()=>{
                    this.$router.push(this.$route.query.redirect)
                },1000);
            }
        },
        //发送验证码
        getCode(){
            if(!this.tel.match(this.isTel)){
                this.toast('请输入正确的手机号码');
            }else{
                this.toast('验证码为123456');
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import 'login.less';
</style>