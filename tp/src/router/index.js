import VueRouter from 'vue-router'
import Vue from 'vue'
import Register from '@/components/Register.vue'
import log from '@/components/log.vue'


//将VueRouter设置为Vue的插件
Vue.use(VueRouter)

const router = new VueRouter({
     // 指定hash属性与组件的对应关系
     routes: [
        { path: '/', component: log },
        { path: '/Register', component: Register },
        { path: '/log', component: log },
    ]
})

export default router