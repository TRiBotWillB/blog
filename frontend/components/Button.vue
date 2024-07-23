<script setup lang="ts">
defineProps<{
    to?: string
}>()

const classes = 'border p-2 text-secondary border-secondary hover:text-white hover:border-white cursor-pointer';

</script>

<template>
    <template v-if="to" >
        <NuxtLink :to="to" :class="classes">
            <slot/>
        </NuxtLink>
    </template>

    <template v-else>
        <button :class="classes">
            <slot/>
        </button>
    </template>
</template>

<style scoped lang="scss">

</style>