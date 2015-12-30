var Vue = require("vue");
var dialog = require("./dialog.vue");

new Vue({
    el: "body",
    components: {
        dialog: dialog
    }
});
