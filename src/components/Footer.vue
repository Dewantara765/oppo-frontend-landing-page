<script setup lang="ts">
    interface Props {
        title: string,
    }
    const props = defineProps<Props>()
</script>

<template>
    <div>
        <div class="font-normal text-gray-400">{{ props.title }}</div>
    </div>
</template>