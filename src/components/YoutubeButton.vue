<template>
  <a  class="px-3 py-2 rounded border bg-red-500 transition hover:text-gray-900 hover:bg-white hover:border-red-500 text-white" :href="href"><slot></slot></a>
</template>

<script setup>
    const props = defineProps({
        href:String
    })
</script>