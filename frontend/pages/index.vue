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

                <WorkExperienceCard
                    job-title="Team Lead"
                    company-name="Writemedia Solutions"
                    date="March 2023 - Current"
                    :id="123"
                />
                <WorkExperienceCard
                    job-title="Software Developer"
                    company-name="Writemedia Solutions"
                    date="March 2023 - Current"
                    :id="123"
                />
                <WorkExperienceCard
                    job-title="Software Developer (Part-Time)"
                    company-name="Bind Technologies Ltd"
                    date="March 2023 - May 2024"
                    :id="123"
                />
            </div>
        </div>

        <div class="mt-10">
            <RecentProjects/>
        </div>
    </main>
</template>

<style scoped lang="scss">

</style>