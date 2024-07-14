<script setup lang="ts">
import {useAsyncData} from "#app";
import type {BlockNode} from "nuxt-strapi-blocks-renderer/dist/runtime/types";

const {find} = useStrapi<BlogPost>()


interface BlogPost {
    id: string;
    Title: string;
    Content: BlockNode[];
    publishedAt: string
}

const {data: blogPosts, pending, refresh, error} = await useAsyncData<BlogPost[]>(
    'blog',
    async () => {
        const response = await find('blogs');
        console.log(response)
        const data: BlogPost[] = response.data?.map(item => ({
            ...item.attributes
        }));

        return data;
    }
)
</script>

<template>
    <div>
        <h2 class="text-3xl text-white mb-5 font-title">Latest Posts</h2>

        <div v-for="blog in blogPosts" class="border border-white p-5 flex flex-col mt-10">
            <div class="flex justify-between">
                <div class="flex-col">
                    <h3 class="text-lg">{{ blog.Title }}</h3>
                </div>

                <div class="flex-col text-lg text-secondary ">
                    {{ new Date(blog.publishedAt).toLocaleDateString() }}
                </div>
            </div>

            <div class="flex flex-col w-full mt-3">
                <StrapiBlocksText :nodes="blog.Content"/>
            </div>

            <NuxtLink class="mt-5 ml-auto btn">
                Read More
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>