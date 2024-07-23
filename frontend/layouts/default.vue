<script setup lang="ts">
import {useBlogStore} from "~/stores/BlogStore";

const blogStore = useBlogStore();

</script>

<template>
  <div class="container mx-auto px-4">
    <Header/>

    <div class="w-full md:w-2/3 lg:w/1/3 mx-auto mt-10">
      <slot/>
    </div>
  </div>
</template>