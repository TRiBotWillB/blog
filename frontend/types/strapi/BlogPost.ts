import type {BlockNode} from "#strapi-blocks-renderer/types";

export interface BlogPost {
    id: number;
    title: string;
    content: BlockNode[];
    summary: string;
    publishedAt: string
}