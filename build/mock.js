//使用mock来模拟数据
var express = require('express'),
	app = express(),
	Mock = require('mockjs'),
	bodyParser = require('body-parser'); //模块用于获取post的参数数据

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  /* login */ 
app.post('/login', function (req, res) {
	var tel = req.body.tel,
		code = req.body.code,
		data = {};
	if(tel != '' && code == '123456'){
		data = {
			code: 1,
			msg: "登录成功"
		}
	}else{
		data = {
			code: 0,
			msg: "账号或者密码错误"
		}
	}
	setTimeout(() => {
		res.send(data);
	},300);   
});

 /* 发送验证码 */ 
app.post('/getCode', function (req, res) {
	var tel = req.body.tel,
		data = {};
	if(tel != ''){
		data = {
			code: 1,
			msg: "验证码为123456"
		}
	}else{
		data = {
			code: 0,
			msg: "请输入手机号码"
		}
	}
	setTimeout(() => {
		res.send(data);
	},300);   
});
module.exports = app;