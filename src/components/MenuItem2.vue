<script setup lang="ts">
 const props = defineProps({
    title: String,
 })
</script>

<template>
<div>
   <div>
         <p class="items-center p-2">{{ props.title }}</p>
      </div>
</div>
</template>