<script setup lang="ts">
interface Props {
  title: string,
}
const props = defineProps<Props>()
</script>

<template>
    <div class="w-80 lg:w-100">
          <div class="flex flex-row place-content-between">
            <p class="p-3 hover:underline underline-offset-4">{{ props.title }}</p>
            <svg class="hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
          </div>
      </div>
</template>