<script setup lang="ts">

interface Nav {
  text: string;
  href: string;
}

const nav = [
  {text: 'Home', href: '/'},
  {text: 'About', href: '/about'},
  {text: 'Blog', href: '/blog'},
  {text: 'Projects', href: '/projects'},
] as Nav[]

const route = useRoute();

const isActive = (href: string) => route.path === href;

</script>

<template>
  <ul class="text-lg">
    <li v-for="page in nav"
        class="inline-block ml-3 first:ml-0"
    >
      <NuxtLink :to="page.href" :class="{'underline': isActive(page.href)}">
        {{ page.text }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">

</style>