<template>
    <v-header>
    </v-header>
    <section class="content">
        <v-menu></v-menu>
        <div class="info">
            <p>
                <span>用户名</span><span class="value">xiaoningning</span>
                <span>密码</span><span class="value">123456</span>
                <span>昵称</span><span class="value">潇意</span>
            </p>
            <p>
                <a v-link="{path: '/index'}" class="btn-back">返回首页</a>
            </p>
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