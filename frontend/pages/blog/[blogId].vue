<script setup lang="ts">
import {useBlogStore} from "~/stores/BlogStore";

const route = useRoute();
const blogStore = useBlogStore();

const blogId = computed(() => Number(route.params.blogId));

const {data: blog} = await useAsyncData(() => blogStore.fetchBlogById(blogId.value));

</script>

<template>
    <div v-if="blog">
        <div class="text-center mt-12">
            <h1 class="text-4xl font-bold font-title">{{ blog.title }}</h1>
        </div>

        <div class="mt-10">
            <StrapiBlocksText :nodes="blog.content"/>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>