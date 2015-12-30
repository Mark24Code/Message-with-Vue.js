<style>
    .menu{
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100px;
        left: -100px;
        background: #000;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        z-index: 99;
    }
    .menu.show{
        -webkit-transform: translateX(100px);
        transform: translateX(100px);
    }
    .menu ul{
        padding-top: 40px;
    }
    .menu li{
        list-style: none;
    }
    .menu a{
        display: block;
        height: 40px;
        line-height: 40px;
        color: #fff;
        font-size: 16px;
        text-align: center;
        text-decoration: none;
    }
    .menu a:hover, .menu a.active{
        background: #31c27c;
        color: #fff;
    }
    .btn-close{
        color: #fff;
        line-height: 40px;
        text-align: center;
        border-top: 1px solid #fff;
        cursor: pointer;
    }
    .btn-close:hover{
        background: #31c27c;
        color: #fff;
    }
    .menu-shadow{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.2);
        z-index: 20;
        display: none;
    }
    .show{
        display: block;
    }
</style>
<template>
    <div :class="show?'menu show': 'menu'">
        <ul>
            <li>
                <a v-link="{ path: '/index'}">首页</a>
            </li>
            <li>
                <a v-link="{ path: '/about'}">关于</a>
            </li>
            <li>
                <a v-link="{ path: '/login'}">登录</a>
            </li>
            <li>
                <a v-link="{ path: '/register'}">注册</a>
            </li>
            <li>
                <a v-link="{ path: '/send'}">发送消息</a>
            </li>
        </ul>
        <div class="btn btn-close" v-on:click="closeMenu">
            关闭
        </div>
    </div>
    <div :class="show? 'menu-shadow show': 'menu-shadow'"></div>
</template>
<script>
    module.exports = {
        data: function(){
            return {};
        },
        props: ["show"],
        methods: {
            closeMenu: function(){
                console.log("menu show", this.show);
                this.show = false;
            }
        }
    }
</script>