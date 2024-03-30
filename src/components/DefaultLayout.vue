<template>
  <div class="bg-gray-100 h-100">
    <navbar></navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
 
</template>

<script setup>
import navbar from '../components/NavBar.vue'

</script>

<style>

</style>