<template>
      <header class="bg-light shadow-md h-16 flex justify-between items-strech ">
        <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5">Home</router-link> <!-- when we click it will takes us to the home page, in the index.js where we have the name is equal to home  -->
        <div class="flex items-center gap-2 ">
            <router-link :to="{name: 'ByName'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200">
                search Meals
            </router-link>
            <router-link :to="{name :'ByLetter'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200">
                Meals By letter
            </router-link>
            <router-link :to="{name : 'ByIngredient'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200">
                Meals By Ingredients
            </router-link>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>