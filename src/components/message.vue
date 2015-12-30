<style>
    .message{
        margin: 10px 0;
    }
    .message p{
        padding: 5px 10px;
        color: #333;
        margin-bottom: 10px;
    }
    .message .btn-box{
        margin-left: 20px;
        height: 30px;
    }
    .message .btn-box a{
        background: #31c27c;
        color: #fff;
        padding: 5px 10px;
        font-size: 12px;
        text-decoration: none;
        border-radius: 3px;
    }
    .message .right{
        float: right;
        margin-right: 20px;
    }
</style>
<template>
<li class="message">
    <p>{{msg}}</p>
    <div class="btn-box">
        <a href="###" class="btn-reply" v-if="get">回复</a>
        <template v-else>
            <a href="###" class="btn-edit right">编辑</a>
            <a href="###" class="btn-delete right" v-on:click="remove($event)">删除</a>
        </template>
    </div>
</li>
</template>
<script>
    module.exports = {
        data: function(){
            return {};
        },
        props: ["get", "msg", "id"],
        methods: {
            remove: function(event){
                event.preventDefault();
                this.$dispatch("removeMessage", this.id);
            }
        }
    };
</script>