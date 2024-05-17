import { gql } from '@apollo/client';
import client from '../lib/apollo-client';

export const getAllPosts = async () => {
    const { data } = await client.query({
        query: gql`
            query GetPosts { 
                posts {
                    id
                    title
                    slug
                    excerpt
                }
            }
        `,
    });
    return data.posts
}

export const getPostBySlug = async (slug) => {
    console.log('Slug: ' + slug);
    const { data, errors } = await client.query({
        query: gql`
            query GetPostBySlug($slug: String!) {
                post(where: { slug: $slug }) {
                  slug
                  id
                  title
                  content {
                    raw
                    html
                    markdown
                    text
                  }
                  coverImage {     
                    url       
                    width     
                    height    
                    handle     
                    fileName  
                  }
                  seoOverride {
                    description
                    title
                  }
                }
              }
        `,
        variables: { slug },
    });

    if (errors) {
        const error = apolloError 

        console.log(error instanceof Error);

        console.log('Slug: ' + slug);
 
        throw new Error("Failed to fetch post.");
    }

    console.log('Post: ', data.post);
    return data.post
}

export const getAllPagePaths = async () => {
    const { data } = await client.query({
      query: gql`
        query GetPaths {
          pages {
            slug
          }
          posts {
            slug
          }
        }
      `,
    });
  
    console.log('Pages Data: ', data.pages);
    console.log('Posts Data: ', data.posts);

    const pages = data.pages.map(({ slug }) => `/${slug}`);
    const articles = data.posts.map(({ slug }) => `/articles/${slug}`);
  
    return [...pages, ...articles];
    
  };