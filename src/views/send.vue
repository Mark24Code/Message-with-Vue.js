<template>
    <v-header>
    </v-header>
    <section class="content">
        <v-menu></v-menu>
        <div class="send">
            <h2>发送消息</h2>
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
                <input type="submit" class="btn-ok" value="发送"/>
            </p>
        </div>
    </section>
    <v-footer></v-footer>
</template>
<script>
    module.exports = {
        data: function(){
            return {};
        },
        components: {
            "v-header": require("../components/header.vue"),
            "v-footer": require("../components/footer.vue"),
            "v-menu": require("../components/menu.vue")
        }
    }
</script>