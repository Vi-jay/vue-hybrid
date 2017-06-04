    import  Vue from 'vue';
    let component = new Vue();
    component.install = function (Vue, options) {
        Vue.mixin({   //在这里定义的东西都会被vue使用时继承过去  可以在这定义全局组件 将会被使用者继承
            methods: {
            },
            data(){
                return{
                }
            },

        });
    };
    export default {component};
