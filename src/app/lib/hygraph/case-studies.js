import { gql } from '@apollo/client';
import client from '@/app/lib/apollo-client';

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

export const getFeaturedCaseStudies = async () => {
  const { data } = await client.query({
      query: gql`
          query GetFeaturedCaseStudies { 
              caseStudies(where: { featured: true }) {
                  id
                  slug
                  title
                  category
                  featured
                  coverImage {
                      url
                      altText
                  }
              }
          }
      `,
  });
  return data.caseStudies
}

export const getCaseStudyBySlug = async (slug) => {
  try {
    console.log('Case Study Slug: ' + slug);
    const { data, errors } = await client.query({
        query: gql`
            query GetCaseStudyBySlug($slug: String!) {
                caseStudy(where: { slug: $slug }) {
                  slug
                  id
                  title
                  category {
                    slug
                    title
                    id
                  }
                  client
                  coverImage {     
                    url       
                    altText
                  }                  
                  introContent
                  challengeContent
                  solutionContent
                  gallery {
                    url
                    altText
                  }
                  strategiesContent
                  strategies {
                    details
                    title
                  }
                  gallerySecondary {
                    url
                    altText
                  }
                  resultContent
                  relatedCaseStudies {
                    slug
                    category
                    title
                    coverImage {
                      altText
                      url
                    }
                  }
                    seoOverride {
                    description
                    title
                    image {
                      altText
                      url
                    }
                  }   
                }
              }
        `,
        variables: { slug },
    });

    return data.caseStudy;
  } catch (error) {
    if (error.networkError) {
      const { response, result } = error.networkError;
      console.error("Network Error:", {
        status: response?.status,
        statusText: response?.statusText,
        url: response?.url,
        errors: result?.errors,
        extensions: result?.extensions,
      });
    } else if (error.graphQLErrors) {
      console.error("GraphQL Errors:", error.graphQLErrors);
    } else {
      console.error("Unknown Error:", error);
    }
  }
}