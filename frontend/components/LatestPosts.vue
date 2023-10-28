<script setup lang="ts">
interface BlogSummary {
  title: string;
  summary: string;
  date: number | string
}

const latestPosts = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae nulla elementum, hendrerit metus et, condimentum massa. Nunc dictum, orci id semper mollis, elit arcu vestibulum nulla, ac interdum nibh libero a leo.',
    date: Date.now()
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae nulla elementum, hendrerit metus et, condimentum massa. Nunc dictum, orci id semper mollis, elit arcu vestibulum nulla, ac interdum nibh libero a leo.',
    date: Date.now()
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae nulla elementum, hendrerit metus et, condimentum massa. Nunc dictum, orci id semper mollis, elit arcu vestibulum nulla, ac interdum nibh libero a leo.',
    date: Date.now()
  },
] as BlogSummary[]

</script>

<template>
  <div>
    <h2 class="text-3xl text-white mb-5 font-title">Latest Posts</h2>

    <div v-for="blog in latestPosts" class="border border-white p-5 flex flex-col mt-10">
      <div class="flex">
        <div class="flex-col">
          <h3 class="text-lg">{{ blog.title }}</h3>

          <p class="mt-6 text-sm">{{ blog.summary }}</p>
        </div>

        <div class="flex-col text-lg text-secondary">
          {{ new Date(blog.date).toLocaleDateString() }}
        </div>
      </div>

      <NuxtLink class="mt-3 ml-auto btn">
        Read More
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>