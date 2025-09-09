<script setup lang="ts">
const props = defineProps({
    image: String,
    title: String,
    desc: String,
})
</script>

<template>
     <div class="w-1/4">
      <img :src="image" class="snap-start shrink-0 object-fill hover:object-none h-60"/>
      <div class=" bg-gray-300 mt-2 p-5">
        <p class="font-bold text-xl">{{ props.title }}</p>
       
            <div class="flex flex-row place-content-between">
            <p>{{props.desc}}</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </div>
       
      </div>
      
    </div>
</template>