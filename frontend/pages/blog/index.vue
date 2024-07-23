<script setup lang="ts">

import LatestPosts from "~/components/LatestPosts.vue";
</script>

<template>
  <main class="container mx-auto mt-10">
    <h1 class="text-3xl font-title text-center">/blog</h1>

      <div class="grid grid-cols-12 mt-5 gap-5">
          <LatestPosts class="col-span-8" />
          <Categories class="col-span-4" />
      </div>
  </main>
</template>

<style scoped lang="scss">

</style>