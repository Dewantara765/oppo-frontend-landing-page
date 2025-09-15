<script setup lang="ts">
interface Props {
   title: string
}
 const props = defineProps<Props>()
</script>

<template>
<div>
   <div>
         <p class="items-center p-2 font-semibold">{{ props.title }}</p>
      </div>
</div>
</template>