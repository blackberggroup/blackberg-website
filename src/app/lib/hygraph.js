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
    console.log('Slug: ' + slug);
    const { data, errors } = await client.query({
        query: gql`
            query GetCaseStudyBySlug($slug: String!) {
                caseStudy(where: { slug: $slug }) {
                  slug
                  id
                  title
                  category
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

export const getNavigation = async () => {
  const { data } = await client.query({
      query: gql`
          query GetNavigation { 
              navigations {
                navigationLink {
                  displayText
                  id
                  url
                  page {
                    ... on Page {
                      id
                      slug
                      title
                    }
                  }
                  url
                }
              }
          }
      `,
  });
  // console.log("Nav:", data.navigations[0]);
  return data.navigations[0];
}

export const getAllEmployees = async () => {
  const { data } = await client.query({
      query: gql`
          query GetAllEmployees { 
              employees {
                  id
                  firstName
                  lastName
                  position
                  image {
                      url
                      altText
                  }
              }
          }
      `,
  });
  return data.employees
}

export const getAllInsights = async () => {
  const { data } = await client.query({
      query: gql`
          query GetAllInsights { 
                insights(orderBy: date_DESC) {
                  id
                  slug
                  title
                  category  {
                    title
                  }
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
                  date
                  employee {
                    image {
                      url
                    }
                    lastName
                    firstName
                  }
              }
          }
      `,
  });
  console.log('Insights: ', data.insights);
  return data.insights
}

export const getFeaturedInsights = async () => {
  const { data } = await client.query({
      query: gql`
          query GetFeaturedInsights { 
                insights(where: {featured: true}, orderBy: date_DESC) {
                  id
                  slug
                  title
                  category  {
                    title
                  }
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
                  date
                  employee {
                    image {
                      url
                    }
                    lastName
                    firstName
                  }
              }
          }
      `,
  });
  return data.insights
}

export const getInsightBySlug = async (slug) => {
  const { data, errors } = await client.query({
      query: gql`
          query GetInsightBySlug($slug: String!) {
              insight(where: { slug: $slug }) {
                 id
                  slug
                  title
                  category  {
                    id
                    title
                  }
                  resources {
                    raw
                  }
                  content {
                    raw
                    references {
                      ... on Video {
                          id
                          title
                          url
                          description
                          coverImage {
                            url
                            altText
                          }
                      }
                      ... on Gallery {
                          id
                          title
                          type
                          images {
                            url
                            altText
                          }
                      }
                    }
                  }
                  coverImage {
                    url
                    altText
                  }
                  date
                  employee {
                    image {
                      url
                    }
                    lastName
                    firstName
                  }                
              }
            }
      `,
      variables: { slug },
  });

  if (errors) {
      const error = apolloError; 

      throw new Error("Failed to fetch insight.");
  }
  console.log('insight: ', data.insight);
  return data.insight
}

export const getRelatedInsights = async (categoryId, insightId) => {
  const { data, errors } = await client.query({
    query: gql`
      query GetRelatedInsights($categoryId: ID!, $insightId: ID!) {
        insights(where: { category: { id: $categoryId }, id_not: $insightId }) {
          id
          slug
          title
          category {
            title
          }
          content {
            raw
          }
          coverImage {
            url
            altText
          }
          date
          employee {
            image {
              url
            }
            lastName
            firstName
          }
        }
      }
    `,
    variables: { categoryId, insightId },
  });

  if (errors) {
    console.log('insight error: ', errors);
    throw new Error("Failed to fetch insights.");
  }

  console.log('Related: ', data);
  return data.insights;
};


// export const getRelatedInsights = async (categoryId, insightId) => {
//   const { data, errors } = await client.query({
//       query: gql`
//           query GetRelatedInsights($categoryId: String!, $insightId: ID!) {
//               insights(where: { id: { id: $categoryId}, NOT: {id: $insightId} }) {
//                   id
//                   slug
//                   title
//                   category  {
//                     title
//                   }
//                   content {
//                     raw
//                   }
//                   coverImage {
//                     url
//                     altText
//                   }
//                   date
//                   employee {
//                     image {
//                       url
//                     }
//                     lastName
//                     firstName
//                   }                
//               }
//             }
//       `,
//       variables: { categoryId, insightId },
//   });

//   if (errors) {
//       const error = apolloError; 
//       console.log('insight error: ', error.response);
//       //throw new Error("Failed to fetch insight.");
//   }

//   console.log('Related: ', data);
//   return data.insightCategories
// }

export const getAllPagePaths = async () => {
    const { data } = await client.query({
      query: gql`
        query GetPaths {
          pages {
            slug
            parentPage {
              slug
            }
          }
          posts {
            slug
          }
          caseStudies {
            slug
          }
        }
      `,
    });

    const pages = data.pages.map(({ slug, parentPage }) => {
      if (parentPage && parentPage.slug) {
        return `/${parentPage.slug}/${slug}`;
      }
      return `/${slug}`;
    });  
    const articles = data.posts.map(({ slug }) => `/insights/${slug}`);
    const caseStudies = data.caseStudies.map(({ slug }) => `/case-studies/${slug}`);
  
    return [...pages, ...articles, ...caseStudies];
    
  };

