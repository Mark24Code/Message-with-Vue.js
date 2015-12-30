<style>

   @font-face {font-family: 'iconfont';
       src: url('../assets/font/iconfont.eot'); /* IE9*/
       src: url('../assets/font/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/font/iconfont.woff') format('woff'), /* chrome、firefox */
       url('../assets/font/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
       url('../assets/font/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
   }
   .iconfont{
       font-family:"iconfont" !important;
       font-size:16px;font-style:normal;
       -webkit-font-smoothing: antialiased;
       -webkit-text-stroke-width: 0.2px;
       -moz-osx-font-smoothing: grayscale;
       }

   header p{
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
   }
   header .btn-menu{
        color: #000;
        padding: 10px;
        position: absolute;
        top: 0;
        text-decoration: none;
        border: none;
        background: transparent;
        outline: none;
   }
   header .btn-menu:hover{
        background: #31c27c;
   }
</style>
<template>
    <header>
        <p>欢迎大家来访！</p>
        <button class="btn-menu" v-on:click="switchMenu"><i class="iconfont">&#xe61f;</i></button>
    </header>
</template>
<script>
    module.exports = {
        data: function(){
            return {};
        },
        events: {
            click: function(){

                alert("2");
            },
            switchMenu: function(){
              console.log("我是children");

            }
        },
        methods: {
          switchMenu: function(){
            console.log(window._header=this);
            this.$dispatch("switchMenu");
          }
        }
    };
</script>