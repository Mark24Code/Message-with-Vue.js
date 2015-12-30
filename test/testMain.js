var Vue = require("vue");
var VueRouter = require("vue-router");
Vue.use(VueRouter);

var Test = Vue.extend({
    template: '<p>我是测试页面</p>'
});

var App = Vue.extend({});

var router = new VueRouter();

router.map({
    '/test': {
        component: Test
    }
});

router.start(App, '#app');