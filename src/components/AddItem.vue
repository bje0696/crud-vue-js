<template>
   <div class="container">
   <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <router-link :to="{ name: 'Add' }" class="nav-link">Add Item</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'List' }" class="nav-link">All Item</router-link>
        </li>
		<li class="nav-item">
          <button v-on:click="logout">Logout</button>
        </li>
      </ul>
    </nav>
   
         <div class="card">
             <div class="card-header">
                 <h3>Add Product</h3>
             </div>
             <div class="card-body">
                 <form v-on:submit.prevent="addProduct">
                     <div class="form-group">
                         <label>Product Name:</label>
                         <input type="text" class="form-control" v-model="newProduct.product_name"/>
                     </div>
                     <div class="form-group">
                         <label>Part Number:</label>
                         <input type="text" class="form-control" v-model="newProduct.part_number"/>
                     </div>
					 <div class="form-group">
                         <label>Basic Price:</label>
                         <input type="text" class="form-control" v-model="newProduct.basic_price"/>
                     </div>
					 <div class="form-group">
                         <label>End User Price:</label>
                         <input type="text" class="form-control" v-model="newProduct.end_user_price"/>
                     </div>
					 <div class="form-group">
                         <label>PPN:</label>
                         <input type="text" class="form-control" v-model="newProduct.ppn"/>
                     </div>
					 <div class="form-group">
                         <label>Stock:</label>
                         <input type="text" class="form-control" v-model="newProduct.stock"/>
                     </div>
                     <div class="form-group">
                         <input type="submit" class="btn btn-primary" value="Add Product"/>
                     </div>
                 </form>
             </div>
         </div>
     </div>
 </template>

 <script>
import firebase from 'firebase'
 import { db } from '../config/db';

 export default {
   components: {
       name: 'AddItem'
   },
   firebase: {
     products: db.ref('products')
   },
   data () {
     return {
       newProduct: {
           product_name: '',
           part_number: '',
           basic_price: '',
           end_user_price: '',
           ppn: '',
           stock: '',
       }
     }
   },
   methods: {
       addProduct() {
         this.$firebaseRefs.products.push({
             product_name: this.newProduct.product_name,
             part_number: this.newProduct.part_number,
             basic_price: this.newProduct.basic_price,
             end_user_price: this.newProduct.end_user_price,
             ppn: this.newProduct.ppn,
             stock: this.newProduct.stock,
         })
         this.newProduct.product_name = '';
         this.newProduct.part_number = '';
         this.newProduct.basic_price = '';
         this.newProduct.end_user_price = '';
         this.newProduct.ppn = '';
         this.newProduct.stock = '';
         this.$router.push('/index')
       },
	   
		logout: function() {
			firebase.auth().signOut().then(() => {
				this.$router.replace('login')
			})
		}
     }
 }
 </script>