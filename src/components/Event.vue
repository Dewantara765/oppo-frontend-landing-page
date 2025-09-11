<script setup lang="ts">
const props = defineProps({
    image: String,
    title: String,
    desc: String,
})
</script>

<template>
     <div class="min-w-[320px] shadow p-4">
        <div class="min-w-[320px] bg-white rounded-2xl shadow p-4">
        <img class="w-100 rounded-md object-cover flex-shrink-0 hover:object-none" :src="image" alt="">
        <h4 class="font-semibold pt-5">{{ props.title }}</h4>
        <p class="text-sm  my-5">{{ props.desc }}</p>
        <!-- <div>
          <h4 class="font-semibold">{{ props.title }}</h4>
          <p class="text-sm text-gray-500">{{ props.desc }}</p>
        </div> -->
      </div>
      
    </div>
</template>