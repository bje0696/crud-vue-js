import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import VueRouter from 'vue-router'
import routes from '../main.js'
import App from '../App.vue'


	let app = '';
  let config = {
     apiKey: "AIzaSyCMfmpTySD51VMZSTeiJhYedR2GNL-8TTk",
    authDomain: "klikdaily-b33f5.firebaseapp.com",
    databaseURL: "https://klikdaily-b33f5.firebaseio.com",
    projectId: "klikdaily-b33f5",
    storageBucket: "klikdaily-b33f5.appspot.com",
    messagingSenderId: "762989128108"
   };
 let appp = Firebase.initializeApp(config)
 export const db = appp.database()
 
 

 // Firebase.auth().onAuthStateChanged(function(user){
	 // if(!app){
		new Vue({
		  render: h => h(App),
		  router: routes
		}).$mount('#app')
	 // }
 // });
 