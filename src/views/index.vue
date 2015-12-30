<style>
.tab-hd{
    overflow: hidden;
}
.tab-hd .tab-menu{
    float: left;
    width: 50%;
    color: #333;
    text-align: center;
    line-height: 2;
    text-decoration: none;
}
.tab-hd .tab-menu.select{
    background: #31c27c;
    color: #fff;
}
.tab-con{
    display: none;
}
.show{
    display: block;
}
</style>
<template>
    <v-header>
    </v-header>
    <section class="content">
        <v-menu :show.sync="menu"></v-menu>
        <div class="index">
            <div class="tab">
                <div class="tab-hd">
                    <a href="###" :class="get? 'tab-menu select': 'tab-menu'" v-on:click="switchMenu(true, $event)">收件箱</a>
                    <a href="###" :class="!get? 'tab-menu select': 'tab-menu'" v-on:click="switchMenu(false, $event)">发件箱</a>
                </div>
                <div class="tab-bd">
                    <div :class="get? 'tab-con show': 'tab-con'">
                        <ul>
                        </ul>
                    </div>
                    <div :class="!get? 'tab-con show': 'tab-con'">
                        <ulv-for="item in message">

                                <v-message :msg="item.content" id="12"></v-message>

                        </ul>
                        <div class="send-box">
                            <input type="text" v-model="newMessage" />
                            <input type="button" v-on:click="addMessage" value="提交" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <v-footer>
    </v-footer>
</template>
<script>
    var menu = require("../components/menu.vue");
    var header = require("../components/header.vue");
    var footer = require("../components/footer.vue");
    var message = require("../components/message.vue");
    module.exports = {
        data: function(){
            console.log("data", this);
            return {
                menu: false,
                get: true,
                newMessage: "",
                message: messageData
            };
        },
        components: {
            "v-menu": menu,
            "v-header": header,
            "v-footer": footer,
            "v-message": message
        },
        events: {
            switchMenu: function(){
                this.menu = !this.menu;
                console.log("index.vue", this);
            },
            removeMessage: function(index){
                this.message.splice(index,1);
            }
        },
        methods: {
            switchMenu: function(isGet, event){
                event.preventDefault();
                this.get = isGet;
            },
            addMessage: function(){
                if(this.newMessage!=""){
                    var newMessage = this.newMessage;
                    this.message.push({
                        content: newMessage
                    });
                    this.newMessage = "";
                }
            }
        }
    }
</script>