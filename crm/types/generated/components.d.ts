import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogBlogPost extends Schema.Component {
  collectionName: 'components_blog_blog_posts';
  info: {
    displayName: 'BlogPost';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.blog-post': BlogBlogPost;
    }
  }
}
