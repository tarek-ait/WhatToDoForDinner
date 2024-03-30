<template >
    <div class=" p-5 flex items-center  justify-center">
        <div class="w-[800] mx-auto ">
            <h1 class="font-bold m-5 text-center">{{ meal.strMeal }}</h1>
            <div class="flex items-center justify-center">
                <img class="rounded mb-4 text-center" :src="meal.strMealThumb" >
            </div>
           
            <div class="flex items-center justify-around gap-3 grid-cols-1 md:grid-cols-3 text-lg py-2">
                <div >
                   <strong class=" font-bold">Category: </strong>{{  meal.strCategory }}
                </div>
                <div>
                   <strong class="font-bold">Area: </strong>{{  meal.strArea }}
                </div>
                <div >
                   <strong class="font-bold">Tags: </strong>{{  meal.strTags}}
                </div>
            </div>

            <div class="p-4 text-center">
                <h5 class="font-bold mb-4">instructions:</h5>
                <span>{{  meal.strInstructions }}</span>
            </div>
            <div class="flex justify-around  mt-5">
                <div>
                    <div>
                        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                        <ul class="ingredients" v-for="(element ,ind) of new Array(20)" :key="(element,ind)">
                            <li v-if="meal[`strIngredient${ind + 1}`]">
                                {{ meal[`strIngredient${ind + 1}`] }} 
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="">
                        <h2 class="text-2xl font-semibold  mb-3">Measures</h2>
                        <ul class="measures" v-for="(element ,ind) of new Array(20)" :key="(element,ind)">
                            <li v-if="meal[`strMeasure${ind + 1}`]">
                                {{ meal[`strMeasure${ind + 1}`] }} 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          
            <div class="flex justify-around mt-9 ">
                <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
                <button class="px-3 py-2 rounded border border-red-500 hover:bg-red-500 transition hover:text-white">Source</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient'
import YoutubeButton from '../components/YoutubeButton.vue';

const route = useRoute()
const meal = ref({})

onMounted(() => { // the axcios client will go and to the db and fetch the data and return it to the meal
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({data}) => {
        meal.value = data.meals[0] || {} // se should get the meal tho 
    })
})
</script>


<style scoped>


</style>