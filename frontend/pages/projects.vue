<script setup lang="ts">
interface Project {
  id: string;
  title: string;
  year: number;
  summary: string
}

const projects = [
  {
    id: '123',
    title: "Agrify",
    year: 2023,
    summary: "Agrify is..."
  },
  {
    id: '123',
    title: "Agrify",
    year: 2023,
    summary: "Agrify is..."
  },
  {
    id: '123',
    title: "Agrify",
    year: 2023,
    summary: "Agrify is..."
  },
  {
    id: '123',
    title: "Agrify",
    year: 2023,
    summary: "Agrify is..."
  },
] as Project[]

</script>

<template>
  <main class="container mx-auto mt-10">
    <h1 class="text-3xl font-title text-center">/projects</h1>

    <div class="mt-5">
      <h2 class="text-3xl font-title">
        Projects
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">

        <div v-for="project in projects" class="border border-white p-4 flex flex-col">
          <h3 class="font-title text-2xl">{{project.title}}</h3>

          <p class="mt-5">
            {{project.summary}}
          </p>


          <NuxtLink :to="project.id" class="mt-3 ml-auto btn">
            Read More
          </NuxtLink>
        </div>

      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>