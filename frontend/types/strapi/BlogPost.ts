import type {BlockNode} from "#strapi-blocks-renderer/types";

export interface BlogPost {
    id: number;
    Title: string;
    Content: BlockNode[];
    publishedAt: string
}