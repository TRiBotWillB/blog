<script setup lang="ts">
defineProps({
    id: Number,
    companyName: String,
    jobTitle: String,
    date: String,
})
</script>

<template>
    <NuxtLink :to="`/career/${id}`" class="hover:text-white">
        <Card class="!border-primary-muted mt-5 flex mb-5 hover:!border-white">
            <div class="flex flex-row justify-between">

                <div class>
                    <h3 class="text-sm">{{companyName}}</h3>
                    <span class="text-xs font-bold">{{jobTitle}}</span>
                </div>

                <div class="text-xs font-bold">{{date}}</div>
            </div>
        </Card>
    </NuxtLink>
</template>

<style scoped lang="scss">

</style>