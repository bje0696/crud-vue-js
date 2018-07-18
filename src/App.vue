êm thanh navigation vào file App.vue:
<template>
  <div id="app" class="container">
    
    <div class="gap">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="css">
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>

<style>
  .gap {
    margin-top: 50px;
  }
</style>

<script>

export default {
  name: 'app'
}
</script>