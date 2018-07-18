<template>
  <div class="sign-up">
	<img src="../assets/logo.png">
	<h3>Let's create a new account!</h3>
	<input type="text" v-model="email" placeholder="Email"> <br>
	<input type="password" v-model="password" placeholder="Password"> <br>
	<button v-on:click="signUp"> Sign Up </button>
	<p>or go back to <router-link to="/login">Login</router-link></p>
	
  </div>
</template>

<script>
	import firebase from 'firebase';
	import { db } from '../config/db';

	export default {
	  name: 'SignUp',
	  data: function() {
		return {
			email: '',
			password: ''
		}
	  },
	  methods: {
		signUp: function(){
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
				function(user){
					// this.$router.replace('index')
					alert('Success !!!')
					var newURL = window.location.protocol + "//" + window.location.host + "/" + "index";
					
					window.location = newURL;
				},
				function(err){
					alert('Oopss. ' + err.message)
				}
			);
		}
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sign-up{
	margin-top: 40px;
	text-align:center;
	align:center;
}
input{
	margin: 10px 0;
	width: 50%;
	padding: 15px;
}
button{
	margin-top: 20px;
	width: 50%;
	cursor: pointer;
}
p{
	margin-top: 40px;
	font-size: 13px;
}
p a{
	text-decoration: underline;
	cursor: pointer;
}
</style>
