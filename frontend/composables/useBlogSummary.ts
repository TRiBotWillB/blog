import type {BlogPost} from "~/types/strapi/BlogPost";
import type {DefaultInlineNode, ParagraphBlockNode, TextInlineNode} from "#strapi-blocks-renderer/types";

export function useBlogSummary(blogPost: BlogPost, length: number = 200): string {
    if (!blogPost.Content) return '';

    const textNodes = blogPost.Content
        .filter(node => node.type == 'paragraph')
        .flatMap(node => node.children as DefaultInlineNode[])
        .filter(node => node.type === 'text') as TextInlineNode[];

    return textNodes.map((node: TextInlineNode) => node.text).join(' ').slice(0, length);
}