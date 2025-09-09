<script setup lang="ts">
const props = defineProps({
    className : String,
    image: String,
    title: String,
    desc: String,
})
</script>

<template>
   
        <div :class="className">
            <div class="flex flex-row place-content-between">
                <p class="text-2xl font-bold">{{ props.title }}</p>
                <img :src="image" class="w-1/2 transition ease-in-out duration-200 hover:scale-110"/>
            </div>
        <div class="bg-gray-300 w-1/2 p-3">
            <p>{{ props.desc }}
            </p>
            <div class="flex flex-row space-x-2 underline text-sm">
            <div>Lebih Lanjut</div>
            <div>Beli sekarang </div>
        </div>

        </div>

        </div>
  
</template>