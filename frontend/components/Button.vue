<script setup lang="ts">
const props = defineProps<{
    to?: string
    disabled?: boolean
}>()

const classes = {
    // Default classes
    'border p-2 text-secondary border-secondary hover:text-white hover:border-white cursor-pointer disabled:text-slate-500 disabled:border-slate-500': true
}
</script>

<template>
    <template v-if="to">
        <NuxtLink :to="to" :class="classes">
            <slot/>
        </NuxtLink>
    </template>

    <template v-else>
        <button :class="classes" :disabled="disabled">
            <slot/>
        </button>
    </template>
</template>

<style scoped lang="scss">

</style>