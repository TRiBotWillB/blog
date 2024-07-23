<script setup lang="ts">

import RecentProjects from "~/components/RecentProjects.vue";
</script>

<template>
    <main class="pb-10">
        <div class="mt-[8em]">
            <div class="flex items-center">
                <span class="font-title text-5xl mr-3">
                  Hi!
                </span>
                <img class="wave" src="~/assets/images/wave.png" alt=""/>
            </div>

            <p class="font-title text-6xl mt-8">
                I'm Will. <br>
                I build things for <br>
                the web.
            </p>
        </div>

        <div class="mt-[5em]">
            <RecentProjects />
        </div>
    </main>
</template>

<style scoped lang="scss">

</style>