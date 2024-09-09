import { gql } from '@apollo/client';
import client from '@/app/lib/apollo-client';

export const getAllInsights = async () => {
  const { data } = await client.query({
      query: gql`
          query GetAllInsights { 
                insights(orderBy: date_DESC) {
                  id
                  slug
                  title
                  category  {
                    id
                    title
                  }
                  content {
                    raw
                    html
                    markdown
                    text
                  }
                  coverImage {
                    id
                    url
                    altText
                  }
                  date
                  employee {
                    id
                    image {
                      id
                      url
                    }
                    lastName
                    firstName
                  }
              }
          }
      `,
  });
  //console.log('Insights: ', data.insights);
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
                    id
                    title
                  }
                  content {
                    raw
                    html
                    markdown
                    text
                  }
                  coverImage {
                    id
                    url
                    altText
                  }
                  date
                  employee {
                    id
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
                    id
                    url
                    altText
                  }
                  date
                  employee {
                    id
                    image {
                      id
                      url
                    }
                    lastName
                    firstName
                  } 
                  seoOverride {
                    id
                    description
                    title
                    image {
                      id
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
  //console.log('insight: ', data.insight);
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
          id
          title
        }
        content {
          raw
        }
        coverImage {
          id
          url
          altText
        }
        date
        employee {
          id
          image {
            id
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
    //console.log('insight error: ', errors);
    throw new Error("Failed to fetch insights.");
  }

  //console.log('Related: ', data);
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
