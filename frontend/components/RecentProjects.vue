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
        title: "Bind",
        year: 2023,
        summary: "Bind is..."
    },
] as Project[]
</script>

<template>
    <h2 class="text-3xl font-title">
        Recent Projects
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">

        <div v-for="project in projects" class="border border-primary-muted p-4 flex flex-col">
            <h3 class="font-title text-2xl">{{project.title}}</h3>

            <p class="mt-5">
                {{project.summary}}
            </p>


            <Button :to="`/projects/${project.id}`" class="mt-3 ml-auto btn">
                Read More
            </Button>
        </div>
    </div>

    <div class="text-center my-10">
        <Button to="projects">More Projects</Button>
    </div>
</template>

<style scoped lang="scss">

</style>