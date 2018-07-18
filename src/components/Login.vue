<template>
  <div class="login">
	<img src="../assets/logo.png">
	<h3>Signin</h3>
	<input type="text" v-model="email"  placeholder="Email"> <br>
	<input type="password" v-model="password"  placeholder="Password"> <br>
	<button v-on:click="signIn"> Login </button>
	<p>You don't have an account ? You can <router-link to="/sign-up">Create Now</router-link></p>
	
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data: function() {
    return {
		email: '',
		password: ''
	}
  },
  methods: {
	signIn: function() {
		firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
			function(user){
				alert('Youre now connected!')
					var newURL = window.location.protocol + "//" + window.location.host + "/" + "index";
					
					window.location = newURL;
					
			},
			function(err){
				alert('Oops. ' + err.message)
			}
			
		);
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.login{
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
