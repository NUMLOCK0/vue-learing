import Vue from "vue";
import VueRouter from "vue-router";


const routes = [{
    path:'/Classify',
    name:"Classify",
    meta:{
        showHeader:true
    },
    component:()=>import("../views/Classify.vue")
},{
    path:'/',
    name:"Home",
    meta:{
        showHeader:false
    },
    
    component:()=>import("../views/Home.vue")
},{
    path:'/PersonCenter',
    name:"PersonCenter",
    meta:{
        showHeader:true
    },
    component:()=>import("../views/PersonCenter.vue")
},{
    path:"/Shopcar",
    name:'Shopcar',
    meta:{
        showHeader:true
    },
    component:()=>import("../views/Shopcar.vue")
}

]
const router = new VueRouter({
    mode: 'history',
    routes
})
Vue.use(VueRouter)

export default router