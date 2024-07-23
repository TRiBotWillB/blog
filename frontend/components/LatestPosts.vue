<script setup lang="ts">
import {useBlogStore} from "~/stores/BlogStore";

const blogStore = useBlogStore();

const {hasMorePosts} = storeToRefs(blogStore);

</script>

<template>
    <div>
        <h2 class="text-3xl text-white mb-5 font-title">Latest Posts</h2>

        <div v-for="blog in blogStore.latestPosts" class="border border-white p-5 flex flex-col mt-10">
            <div class="flex justify-between">
                <div class="flex-col">
                    <h3 class="text-lg">{{ blog.Title }}</h3>
                </div>

                <ClientOnly>
                    <div class="flex-col text-lg text-secondary ">
                        {{ new Date(blog.publishedAt).toLocaleDateString() }}
                    </div>
                </ClientOnly>
            </div>

            <div class="flex flex-col w-full mt-3">
                {{useBlogSummary(blog, 200)}}...
            </div>

            <Button disabled :to="`/blog/${blog.id}`" class="mt-5 ml-auto btn text-sm">
                Read More
            </Button>
        </div>

        <div class="text-center mt-10 mb-10">
            <Button @click="blogStore.fetchPosts()" :disabled="!hasMorePosts">
                More Posts
            </Button>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>