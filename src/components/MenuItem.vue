<script setup lang="ts">
interface Props {
   image: string;
   title: string;
}
 const props = defineProps<Props>()
</script>

<template>
<div>
   <div>
        <img :src=props.image class="h-20 w-15 lg:h-60 lg:w-45 bg-gray-300 shrink-0 hover:scale-110 hover:cursor-pointer"/> <p class="flex justify-center p-2 font-semibold">{{ props.title }}</p>
      </div>
</div>
</template>

