<script setup lang="ts">
 const props = defineProps({
    image: String,
    title: String,
 })
</script>

<template>
<div>
   <div>
        <img :src=props.image class=" h-60 bg-gray-300"/> <p class="flex justify-center p-2">{{ props.title }}</p>
      </div>
</div>
</template>

