import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import Routers from 'ROUTES/router'
import VueRouter from 'vue-router';
/*use Plugins*/
Vue.use(VueRouter);
Vue.use(iView);


const RouterConfig = {
    routes: Routers
};

const router = new VueRouter(RouterConfig);
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
