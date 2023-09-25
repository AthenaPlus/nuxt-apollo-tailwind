<template>
        <div class="flex m-3 bg-gray-300 rounded-xl">
        <NuxtLink :to="`/blog/${id}`">
            <div class="m-3">
                <h3 class="text-2xl mb-3 text-pink-700"><span class="text-gray-600 text-base">Title:</span>  {{ Title }}</h3>
                <p class="mb-4">Description: {{ Description }}</p>
                <p class="">{{  }}</p>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    attributes: {
        type: Object,
        required: true,
    },
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true,
    },

})
</script>

<style scoped>

</style>