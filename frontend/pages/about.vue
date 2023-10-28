<script setup lang="ts">
import {useAsyncData} from "#app";

const {findOne} = useStrapi()

interface AboutMePage {
  Intro: string
}

const {data: aboutMe, pending, refresh, error} = await useAsyncData<AboutMePage>(
    'about-me',
    async () => {
      const data = await findOne<AboutMePage>('about-me')

      return data.data.attributes as AboutMePage;
    }
)


</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-3xl text-center font-title">/about</h1>

    <div class="mt-5">
      <h2 class="text-3xl font-title">
        About Me
      </h2>

      <p class="mt-5">
        {{aboutMe.Intro}}
      </p>
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>