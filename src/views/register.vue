<style>
.register h2{
    padding: 10px 0;
    text-align: center;
    font-size: 20px;
    font-weight: normal;
}
.register p{
    padding-left: 100px;
    margin-top: 10px;
}
.register span{
    color: #31c27c;
    margin-right: 10px;
    display: inline-block;
    width: 70px;
    text-align: right;
}
.register input[type=text], .register input[type=password]{
    padding: 5px;
    line-height: 1.2;
    border-radius: 3px;
    width: 160px;
    border: 1px solid #ccc;
    outline: none;
}
.register .btn-submit{
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
        <div class="register">
            <h2>注册</h2>
            <p>
                <span>用户</span><input type="text" name="username" v-model="username"/>
            </p>
            <p>
                <span>昵称</span><input type="text" name="nickname" v-model="nickname"/>
            </p>
            <p>
                <span>密码</span><input type="password" name="password" v-model="password"/>
            </p>
            <p>
                <span>确认密码</span><input type="password" name="password_again" v-model="password_again"/>
            </p>
            <p>
                <input type="button" class="btn-submit" value="确定" v-on:click="register"/>
            </p>
            <p>{{username}}{{nickname}}{{password}}{{password_again}}</p>
        </div>
    </section>
    <v-footer>
    </v-footer>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                username: "",
                nickname: "",
                password: "",
                password_again: ""
            };
        },
        components: {
            "v-footer": require("../components/footer.vue")
        },
        methods: {
            register: function(e){
                var username = this.username;
                var nickname = this.nickname;
                var password = this.password;
                var password_again = this.password_again;

                if(!username){
                    alert("用户名不能为空！");
                    return false;
                }

                if(!nickname){
                    alert("用户名不能为空！");
                    return false;
                }

                if(password != password_again){
                    alert("两次输入的密码不一致，请重新输入");
                    return false;
                }

                // 保存数据
                user.push({
                    username: username,
                    nickname: nickname,
                    password: password
                });
                alert("保存成功！");
                router.go("/index");
            }
        }
    }
</script>