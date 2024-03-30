<template>
  <div class="p-8">
    <input type="text" @change="searchMeals" v-model="keyword" class="rounded border-2 border-gray-200 h-full w-full" placeholder="search for meals">
  </div>
  <div v-if="!meals" class="text-center">there are no meals</div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"></MealItem>
  </div>
</template>

<script setup>


import { ref } from 'vue'
import { computed } from '@vue/reactivity'
import YoutubeButton from '../components/YoutubeButton.vue'
import store from '../store'
import MealItem from '../components/MealItem.vue'
 


  
   const keyword = ref('')
   const meals = computed(() => store.state.searchedMeals)
   function searchMeals(){
    store.dispatch('searchMeals', keyword.value)
   }

</script>

<style>

</style>