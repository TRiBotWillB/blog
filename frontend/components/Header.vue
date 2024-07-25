<script setup lang="ts">

import {useAsyncData} from "#app";
import type {Navigation} from "~/types/strapi/Navigation";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const {findOne} = useStrapi<Navigation>()

const {data: navigation, pending, refresh, error} = await useAsyncData<Navigation>(
    'navigation',
    async () => {
        const response = await findOne('navigation');

        return response?.data.attributes
    });

</script>

<template>
    <div class="mt-10">
        <div class="flex flex-row items-center justify-between mt-5">
            <h1 class="text-6xl font-title">Will Baker</h1>

            <div class="text-3xl">
                <NuxtLink :to="navigation?.linkedin" target="_blank" class="mr-5 hover:text-4xl transition-all duration-200">
                    <font-awesome :icon="faLinkedin" />
                </NuxtLink>

                <NuxtLink :to="navigation?.github" target="_blank" class="hover:text-4xl transition-all duration-200">
                    <font-awesome :icon="faGithub" />
                </NuxtLink>
            </div>
        </div>

        <div class="mt-5 text-center md:text-left">
      <span class="font-light ml-1 ">
        {{navigation?.subtitle}}
      </span>
        </div>
    </div>

    <div class="text-center mt-5">
        <Nav/>
    </div>
</template>

<style scoped lang="scss">

</style>