import {useBlogStore} from "~/stores/BlogStore";
import {useNuxtApp} from "#app";

export default defineNuxtPlugin(async (nuxt) => {
    const {$pinia} = useNuxtApp();
    const blogStore = useBlogStore($pinia);

    await useAsyncData('blog', () => blogStore.fetchData())
})