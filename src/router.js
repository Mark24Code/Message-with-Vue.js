var index = require("./views/index.vue");
var about = require("./views/about.vue");
var login = require("./views/login.vue");
var register = require("./views/register.vue");
var send = require("./views/send.vue");

module.exports = function(router){
    router.map({
        "/": {
            name: 'index', //首页
            component:  index
        },
        "/index": {
            name: 'index', //首页
            component: index
        },
        "/login": {
            name: "login", //登录
            component: login
        },
        "/about": {
            name: "about", //关于
            component: about
        },
        "/register": {
            name: "register", //注册
            component: register
        },
        "/send": {
            name: "send", //发送
            component: send
        }
    });
}


