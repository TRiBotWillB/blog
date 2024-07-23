<script setup lang="ts">
const categories = [
    'Dotnet',
    'Vue',
    'Nuxt',
    'Pinia',
    'SQL',
    'Entity Framework'
]
</script>

<template>
<div>
    <h2 class="text-3xl text-white mb-5 font-title">Categories</h2>

    <div class="gap-5">
        <Button v-for="category in categories" class="mt-5 mx-1">
            {{category}}
        </Button>
    </div>
</div>
</template>

<style scoped lang="scss">

</style>