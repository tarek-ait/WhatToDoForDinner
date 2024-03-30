<template>
  <div  class="bg-white shadow rounded-t-xl">
     <router-link :to="{ name: 'mealDetails' , params:{id: meal.idMeal } }">
      <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl h-48 w-full object-cover">
     </router-link>
      <div>
          <h3 class="px-3 py-3 font-bold"> {{  meal.strMeal }}</h3>
          <p  class="px-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, consequuntur.</p>
          <p class="px-3 my-2 font-bold"> {{ meal.strArea }}</p>
        <div class="px-3 flex  items-center justify-between my-3">
            <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
        </div>
      </div>
    </div>

    
</template>

<script setup>
import YoutubeButton from './YoutubeButton.vue';
const {meal} = defineProps({
    meal:{
        required:true,
        type:Object
    }
})

</script>

<style>

</style>