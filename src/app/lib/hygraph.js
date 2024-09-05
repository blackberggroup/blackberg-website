import { gql } from '@apollo/client';
import client from '../lib/apollo-client';

const stage = process.env.NEXT_PUBLIC_HYGRAPH_STAGE || 'PUBLISHED';

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

    if (errors) {
        const error = apolloError;
        throw new Error("Failed to fetch post.");
    }

    return data.page
}

export const getAllCaseStudies = async () => {
  const { data } = await client.query({
      query: gql`
          query GetCaseStudies($stage1: Stage!, $stage2: Stage) {
              caseStudies(stage_in: [$stage1, $stage2]) {
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
      variables: { stage1: 'PUBLISHED', stage2: stage !== 'PUBLISHED' ? stage : null },
  });
  return data.caseStudies;
};

export const getFeaturedCaseStudies = async () => {
  try {
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

    return data.caseStudies;
  } catch (error) {
    console.error('Error fetching featured case studies:', error);
    return []; // Return an empty array or handle the error as needed
  }
};

export const getCaseStudyBySlug = async (slug) => {
  try {
    console.log('Case Study Slug: ' + slug);
    //console.log('Slug: ' + slug);
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

export const getNavigation = async () => {

  try {
    const { data, errors } = await client.query({
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
                  menuText
                }
              }
            }
          }
        }
      `,
    });

    return data.navigations[0];

  } catch (error) {
    throw new Error(`Failed to fetch navigation data: ${error.message}`);
  }
};


function flattenObject(obj, prefix = '') {
  const flattened = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Recursively flatten nested objects
      Object.assign(flattened, flattenObject(value, newKey));
    } else if (Array.isArray(value)) {
      // Flatten arrays by iterating over their items
      value.forEach((item, index) => {
        Object.assign(flattened, flattenObject(item, `${newKey}[${index}]`));
      });
    } else {
      // Assign primitive values
      flattened[newKey] = value;
    }
  }

  return flattened;
}


export const getAllEmployees = async () => {
  const { data } = await client.query({
      query: gql`
          query GetAllEmployees { 
              employees(orderBy: order_ASC) {
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
                insights(where: {featured: true}, orderBy: date_DESC, first: 3) {
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
  try {
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

  // if (errors) {
  //     const error = apolloError; 

  //     throw new Error("Failed to fetch insight.");
  // }
  console.log('insight: ', data.insight);
  return data.insight
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


export const getRelatedInsights = async (categoryArray, insightId) => {
  try {
  const { data, errors } = await client.query({
    query: gql`
    query GetRelatedInsights($categoryIds: [ID!], $insightId: ID!) {
      insights(where: { category_some: { id_in: $categoryIds }, id_not: $insightId }, first: 3) {
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
  variables: { categoryIds: categoryArray.map(category => category.id), insightId },  
  });

  if (errors) {
    console.log('insight error: ', errors);
    throw new Error("Failed to fetch insights.");
  }

  console.log('Related: ', data);
  return data.insights;
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
};

export const getAllCareers = async () => {
  const { data } = await client.query({
      query: gql`
          query GetAllCareers { 
              careers {
                  id
                  slug
                  title
                  type
                  location
              }
          }
      `,
  });
  console.log('Careers: ', data.careers);
  return data.careers
}

export const getCareerBySlug = async (slug) => {
  const { data, errors } = await client.query({
      query: gql`
          query GetCareerBySlug($slug: String!) {
              career(where: { slug: $slug }) {
                slug
                id
                title
                type
                location
                content {
                  raw
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

  return data.career
}

export const getAllPagePaths = async () => {

  try {
    const { data } = await client.query({
      query: gql`
        query GetPaths {
          pages {
            slug
            parentPage {
              slug
            }
          }
          insights {
            slug
          }
          caseStudies {
            slug
          }
          careers {
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
    const insights = data.insights.map(({ slug }) => `/insights/${slug}`);
    const caseStudies = data.caseStudies.map(({ slug }) => `/case-studies/${slug}`);
    const careers = data.careers.map(({ slug }) => `/about/careers/${slug}`);
  
    return [...pages, ...insights, ...caseStudies, ...careers];
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
    
  };

