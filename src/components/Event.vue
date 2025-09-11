<script setup lang="ts">
const props = defineProps({
    image: String,
    title: String,
    desc: String,
})
</script>

<template>
     <div class="min-w-[320px] shadow p-4">
        <div class="min-w-[320px] bg-white rounded-2xl shadow p-4 flex gap-4">
        <img class="w-50 h-50 rounded-md object-cover flex-shrink-0" :src="image" alt="">
        <div>
          <h4 class="font-semibold">{{ props.title }}</h4>
          <p class="text-sm text-gray-500">{{ props.desc }}</p>
        </div>
      </div>
      
    </div>
</template>