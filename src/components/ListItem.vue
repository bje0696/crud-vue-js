<template>
  <div>
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
  
    <h1>List Products</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Part Number</th>
          <th>Basic Price</th>
          <th>End User Price</th>
          <th>PPN</th>
          <th>Stock</th>
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="product of products" :key="product['.key']">
            <td>{{ product.product_name }}</td>
            <td>{{ product.part_number }}</td>
            <td>{{ product.basic_price }}</td>
            <td>{{ product.end_user_price }}</td>
            <td>{{ product.ppn }}</td>
            <td>{{ product.stock }}</td>
            <td>
                <router-link :to="{ name: 'Edit', params: {id: product['.key']} }" class="btn btn-warning">
                  Edit
                </router-link>
            </td>
            <td>
              <button @click="deleteProduct(product['.key'])" class="btn btn-danger">Delete</button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../config/db';

export default {
  components: {
      name: 'ListItem'
  },
  data() {
    return {
      products: []
    }
  },
  firebase: {
    products: db.ref('products')
  },
  methods: {
    deleteProduct(key) {
      this.$firebaseRefs.products.child(key).remove();
    },
	logout: function() {
		firebase.auth().signOut().then(() => {
			this.$router.replace('login')
		})
	}
		
	}
  }

</script>