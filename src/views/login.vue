<style>
.login h2{
    padding: 10px 0;
    text-align: center;
    font-size: 20px;
    font-weight: normal;
}
.login p{
    padding-left: 100px;
    margin-top: 10px;
}
.login span{
    color: #31c27c;
    margin-right: 10px;
}
.login input[type=text], .login input[type=password]{
    padding: 5px;
    line-height: 1.2;
    border-radius: 3px;
    width: 160px;
    border: 1px solid #ccc;
    outline: none;
}
.login .btn-submit{
    border-radius: 3px;
    padding: 5px 10px;
    color: #666;
    border: 1px solid #31c27c;
    background: #fff;
    outline: none;
}
</style>
<template>
<section class="content">
    <div class="login">
        <h2>登录</h2>
        <p><span>用户</span><input type="text" name="username"/></p>
        <p><span>密码</span><input type="password" name="password"/></p>
        <p><input type="submit" class="btn-submit" value="确定"/></p>
    </div>
</section>
<v-footer>
</v-footer>
</template>
<script>
    var footer = require("../components/footer.vue");
    module.exports = {
        data: function(){
            return {};
        },
        components: {
            "v-footer": footer
        }
    }
</script>