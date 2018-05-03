/**
 * 通用模块
 */
if (!window.requestAnimationFrame) {
    requestAnimationFrame = function(fn) {
        setTimeout(fn, 17);
    };  
}
/**
 * [回到顶部]
 * @param  {[int]} rate [速率 默认4]
 */
let goTop = (rate=4) => {
    let doc = document.body.scrollTop ? document.body : document.documentElement;
    let scrollTop = doc.scrollTop;
    let top = function () {
        scrollTop = scrollTop + (0 - scrollTop) / (rate || 2);
        if (scrollTop < 1) {
            doc.scrollTop = 0;
            return false;
        }
        doc.scrollTop = scrollTop;
        stop = requestAnimationFrame(top);    
    };
    top();
}
/**
 * [回到顶部操作]]
 * @param  {[funtion]} rate 回调函数
 */
let showTop = callback => {
	window.addEventListener('scroll',() => {
        if(document.body.scrollTop > 500) {
            callback(true);
        }else{
            callback(false);
        }
    });
}

/**
 * [setCookie 设置cookie]
 * @param {[string]} name  [cookie名称]
 * @param {[string]} value [cookie值]
 */
let setCookie = (name,value) =>{
    if(window.localStorage){
        localStorage.removeItem(name);
        localStorage.setItem(name,value);
    } else {
        var Days = 1000;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    };
    return false;
}

/**
 * [getCookie 获得cookie]
 * @param {[string]} name  [cookie名称]
 */
let getCookie = (name) =>{
    if(window.localStorage){
        var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        arr = localStorage.getItem(name);
        return arr;
    } else {
        var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr = document.cookie.match(reg)){
            return unescape(arr[2]);
        }else{
            return null;
        }
    };
}
/**
 * [delCookie 删除cookie]
 * @param {[string]} name  [cookie名称]
 */
let delCookie = (name) =>{
    if(window.localStorage){
        localStorage.removeItem(name);
    } else {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval=getCookie(name);
        if(cval!=null){document.cookie= name + "="+cval+";expires="+exp.toGMTString();}
    };
}
export {goTop,showTop,setCookie,getCookie,delCookie};