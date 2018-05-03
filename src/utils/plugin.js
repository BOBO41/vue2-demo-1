/**
 * [install 插件]
 * @param  {[type]} Vue     [Vue实例]
 * @param  {[type]} options [参数]
 */
Plugin.install = function (Vue, options) {
    let tpl = null;
    Vue.prototype.toast = (content='系统繁忙,请重试',time=2000) => {
        if(!document.getElementById('toast-box')){
            let toastTpl = Vue.extend({// 1、创建构造器，定义好提示信息的模板
                template: '<div class="ui-toast" id="toast-box"></div>'
            });
            tpl = new toastTpl().$mount().$el; // 2、创建实例，挂载到文档以后的地方
            document.body.appendChild(tpl); // 3、把创建的实例添加到body中
        }
        setTimeout(function () {
            document.getElementById('toast-box').innerHTML = '<p>' + content + '</p>'
            tpl.classList.add('toast-show');
        }, 100);
        setTimeout(function () { // 4、延迟2秒后移除该提示
            tpl.classList.remove('toast-show');
        },time);
    }
};
module.exports = Plugin;