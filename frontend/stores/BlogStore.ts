import type {BlogPost} from "~/types/strapi/BlogPost"

export const useBlogStore = defineStore('blog', () => {
    const blogPosts = ref<BlogPost[]>([]);
    const totalPosts = ref<number>(-1);

    // Fetches 10 blog posts at a time
    const fetchPosts = async () => {
        const {find} = useStrapi()

        // If there are no more posts to fetch, return the existing data
        if (!hasMorePosts.value) return blogPosts.value;

        const response = await find<BlogPost>('blogs', {
            sort: ['createdAt', 'updatedAt'],
            pagination: {
                start: blogPosts.value.length,
                limit: 10
            }
        });

        totalPosts.value = response.meta.pagination.total;

        const data: BlogPost[] = response.data?.map(item => ({
            ...item.attributes,
            id: item.id
        }));

        // Add the blog posts to the existing array
        blogPosts.value = blogPosts.value.concat(data);

        return blogPosts.value;
    }

    const fetchBlogById = async (id: number): Promise<BlogPost | null> => {
        // Check if the blog post is already in the store
        let blogPost = blogPosts.value.find(item => item.id === id);

        if (!!blogPost)
            return blogPost;

        const {findOne} = useStrapi()

        // Blog post isn't already in the store, so let's fetch it from Strapi
        const response = await findOne<BlogPost>('blogs', id)

        // TODO: Navigate to 404 if not found

        return {
            ...response.data.attributes,
            id: response.data.id
        } as BlogPost
    }


    const latestPosts = computed(() => blogPosts.value.slice(0, 10));
    const hasMorePosts = computed(() => totalPosts.value === -1 || blogPosts.value.length < totalPosts.value)

    return {
        blogPosts, totalPosts, latestPosts, hasMorePosts, fetchPosts, fetchBlogById
    }
})