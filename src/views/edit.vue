<template>
    <v-header>
    </v-header>
    <section class="content">
        <v-menu></v-menu>
        <div class="edit">
            <h2>编辑消息</h2>
            <form id="edit-form">
                <p>
                    <span>发送给</span>
                    <select name="user">
                        <option value="1">小红</option>
                        <option value="2">小猪</option>
                        <option value="3">小草</option>
                        <option value="4">小哈</option>
                    </select>
                </p>
                <p>
                    <span>内容</span>
                    <textarea name="msg"></textarea>
                </p>
                <p>
                    <input type="submit" class="btn-submit" value="完成"/>
                </p>
            </form>
        </div>
    </section>
    <v-footer></v-footer>
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