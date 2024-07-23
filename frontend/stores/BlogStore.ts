import type {BlogPost} from "~/types/strapi/BlogPost"
import {useAsyncData} from "#app";

export const useBlogStore = defineStore('blog', () => {
    const blogPosts = ref<BlogPost[]>([]);
    const initialized = ref<boolean>(false);

    const fetchData = async () => {
        const {find} = useStrapi()

        const response = await find<BlogPost>('blogs');

        const data: BlogPost[] = response.data?.map(item => ({
            ...item.attributes,
            id: item.id
        }));

        blogPosts.value = data ?? [];

        return data;
    }

    const fetchBlogById = (id: number) => {
        if(!initialized) return null;

        return blogPosts.value.find(item => item.id === id);
    }

    return {
        blogPosts, fetchData, fetchBlogById
    }
})