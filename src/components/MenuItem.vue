<script setup lang="ts">
 const props = defineProps({
    image: String,
    title: String,
 })
</script>

<template>
<div>
   <div>
        <img :src=props.image class="h-20 w-15 lg:h-60 lg:w-45 bg-gray-300 shrink-0"/> <p class="flex justify-center p-2">{{ props.title }}</p>
      </div>
</div>
</template>

