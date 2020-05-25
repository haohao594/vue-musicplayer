import Vue from 'vue'
import Router from 'vue-router'
/* import Home from '@/components/Home'
import Header from "@/components/Header.vue" */

Vue.use(Router)

const home = () => import('@/components/Home');
const playList = () => import('@/components/PlayList');
const player = () => import('@/components/Player');


export default new Router({
  routes: [{
    path: '/',
    component: home //主界面
}, {
    path: '/playlist/detail',
    component: playList //歌单页面
}, {
    path: '/player',
    component: player //播放页面
}]
})
