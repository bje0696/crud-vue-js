import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import App from './App.vue'
import NProgress from 'nprogress';
import '../node_modules/nprogress/nprogress.css'

import AddItem from './components/AddItem.vue'
import EditItem from './components/EditItem.vue'
import ListItem from './components/ListItem.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'

Vue.use(VueFire)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
      path: '*',
      redirect: '/login'
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
        name: 'Add',
        path: '/add',
        component: AddItem
  },
  {
      name: 'Edit',
      path: '/edit/:id',
      component: EditItem
  },
  {
      name: 'List',
      path: '/index',
      component: ListItem,
	  meta:{
		  requiresAuth: true		  
	  }
  },
  {
      name: 'Login',
      path: '/login',
      component: Login
  },
  {
      name: 'SignUp',
      path: '/sign-up',
      component: SignUp
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });
export default new VueRouter({routes});

// router.beforeEach((to, from, next) => {
	// let currentUser = firebase.auth().currentUser;
	// let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	
	// if (requiresAuth && !currentUser) next('login')
		// else if (!requiresAuth && currentUser) next('index')
			// else next()
	
// })

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

// firebase.auth().onAuthStateChanged(function(user){
	// if(!App){
		new Vue({
		  render: h => h(App),
		  router
		}).$mount('#app')
	// }
// });