<script setup lang="ts">

import RecentProjects from "~/components/RecentProjects.vue";
</script>

<template>
    <main class="pb-10">
        <div class="grid grid-cols-12 gap-6 mt-[8em]">
            <div class="col-span-7">
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

            <div class="col-span-5">
                <div class="text-center">
                    <Button to="/contact" class="mr-3">Talk with me</Button>
                    <Button to="/projects">See my work</Button>
                </div>

                <hr class="mt-10 mb-5 border-primary-muted"/>

                <h2 class="font-light">Working Experience</h2>

                <Card class="!border-primary-muted mt-5 flex mb-5">
                    <div class="flex flex-row justify-between">

                        <div class>
                            <h3 class="text-sm">Writemedia Solutions</h3>
                            <span class="text-xs font-bold">Team Lead</span>
                        </div>

                        <div class="text-xs font-bold">March 2023 - Current</div>
                    </div>
                </Card>
                <Card class="!border-primary-muted mt-5 flex !flex-row justify-between mb-5 align-middle">
                    <div class>
                        <h3 class="text-sm">Writemedia Solutions</h3>
                        <span class="text-xs font-bold">Software Developer</span>
                    </div>

                    <div class="text-xs font-bold">March 2023 - Current</div>

                </Card>
                <Card class="!border-primary-muted mt-5 flex !flex-row justify-between mb-5 align-middle">
                    <div class>
                        <h3 class="text-sm">Bind Technologies Ltd</h3>
                        <span class="text-xs font-bold">Software Developer (Part-Time)</span>
                    </div>

                    <div class="text-xs font-bold">March 2023 - May 2024</div>
                </Card>
            </div>
        </div>

        <div class="mt-10">
            <RecentProjects/>
        </div>
    </main>
</template>

<style scoped lang="scss">

</style>