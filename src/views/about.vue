<style>
.about{
    padding-left: 20px;
    line-height: 1.5;
}
.about h2{
    text-align: center;
}
.about a{
    color: #31c27c;
    text-decoration: none;
}
.about a:hover{
    text-decoration: underline;
}
</style>
<template>
    <v-header>
    </v-header>
    <section class="content">
        <v-menu>
        </v-menu>
        <div class="about">
            <h2>关于我</h2>
            <p>我是猪猪侠，我很爱这里，欢迎大家来给我发消息，送吃食！</p>
            <p>邮箱：<a href="mailto: xiaoning0104@gmail.com">xiaoning0104@gmail.com</a></p>
            <p>支付宝：18700917622</p>
            <p>生日：1992年2月7日</p>
        </div>
    </section>
    <v-footer>
    </v-footer>
</template>
<script>
    var header = require("../components/header.vue");
    var footer = require("../components/footer.vue");
    var menu = require("../components/menu.vue");
    module.exports = {
        data: function(){
            return {};
        },
        components: {
            "v-header": header,
            "v-footer": footer,
            "v-menu": menu
        }
    }
</script>