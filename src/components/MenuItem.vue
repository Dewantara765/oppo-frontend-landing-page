<script setup lang="ts">
interface Props {
   image: string;
   title: string;
}
 const props = defineProps<Props>()
</script>

<template>
<div>
   <div class="flex flex-col">
      <div class="bg-gray-100 w-30 lg:h-60 lg:w-45">
          <img :src=props.image class=" shrink-0 hover:scale-110 hover:cursor-pointer"/> 
      </div> 
        <p class="p-2 font-semibold w-45">{{ props.title }}</p>
   </div>
</div>
</template>

