import Vue from 'vue';
import VueRouter from 'vue-router'
import HaveHeader from '../page/HaveHeader'
import Recommend from '../group/Recommend'
import Classify from '../group/Classify'
import Forum from '../group/Forum'
import Newest from '../group/Newest'
import Ranking from '../group/Ranking'
import Details from '../page/Details'
import User from '../page/User'
import Login from '../page/Login'
import One from '../components/One'
import Two from '../components/Two'
import Three from '../components/Three'
Vue.use(VueRouter)
const routes = [{
    path: '/HaveHeader', name: 'HaveHeader', component: HaveHeader,
    children: [{
        path: 'recommend', name: 'recommend', component: Recommend,
    }, {
        path: 'classify', name: 'classify', component: Classify,
    }, {
        path: 'forum', name: 'forum', component: Forum,
    }, {
        path: 'newest', name: 'newest', component: Newest,
    }, {
        path: 'ranking', name: 'ranking', component: Ranking,
    },]
},
{
    path: '/details/:id', name: 'details', component: Details,
    children: [{
        path: 'one', name: 'One', component: One,
    },{
        path: 'two', name: 'Two', component: Two,
    },{
        path: 'three', name: 'Three', component: Three,
    }]  
},
{
    path: '/',
    redirect: '/HaveHeader/recommend',
},
{
    path: '/user', name: 'user', component: User,
},
{
    path: '/login', name: 'login', component: Login,
},



]









const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;