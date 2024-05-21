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
        const error = apolloError; 
 
        throw new Error("Failed to fetch post.");
    }

    return data.post
}

export const getPageBySlug = async (slug) => {
    const { data, errors } = await client.query({
        query: gql`
            query GetPageBySlug($slug: String!) {
                page(where: { slug: $slug }) {
                  slug
                  id
                  title
                  content {
                    raw
                    html
                    markdown
                    text
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
        const error = apolloError;
        throw new Error("Failed to fetch post.");
    }

    return data.page
}

export const getAllCaseStudies = async () => {
    const { data } = await client.query({
        query: gql`
            query GetCaseStudies { 
                caseStudies {
                    id
                    title
                    category
                    slug
                    excerpt
                    coverImage {
                        url
                        altText
                    }
                      content {
                        html
                        markdown
                        raw
                        text
                    }
                }
            }
        `,
    });
    return data.caseStudies
}

export const getCaseStudyBySlug = async (slug) => {
    console.log('Slug: ' + slug);
    const { data, errors } = await client.query({
        query: gql`
            query GetCaseStudyBySlug($slug: String!) {
                caseStudy(where: { slug: $slug }) {
                  slug
                  id
                  title
                  category
                  content {
                    raw
                    html
                    markdown
                    text
                  }
                  coverImage {     
                    url       
                    altText
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
        const error = apolloError; 
 
        throw new Error("Failed to fetch case study.");
    }

    return data.caseStudy
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

    const pages = data.pages.map(({ slug }) => `/${slug}`);
    const articles = data.posts.map(({ slug }) => `/articles/${slug}`);
  
    return [...pages, ...articles];
    
  };

