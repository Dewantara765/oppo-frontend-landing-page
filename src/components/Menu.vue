<script setup lang="ts">
 const emit = defineEmits(["show"])
 const props = defineProps({
     title: String,
 })

 function showDropdown() {
    emit("show")
 }
</script>

<template>

</template>