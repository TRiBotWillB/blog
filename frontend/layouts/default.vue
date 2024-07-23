<script setup lang="ts">
import {useBlogStore} from "~/stores/BlogStore";

const blogStore = useBlogStore();

</script>

<template>
  <div class="container mx-auto">
    <Header/>

    <div class="w-full md:w-4/5 lg:w-3/4 mx-auto mt-10">
      <slot/>
    </div>
  </div>
</template>