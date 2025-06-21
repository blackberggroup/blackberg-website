import { gql } from '@apollo/client';
import client from '@/app/lib/apollo-client';

export const listCaseStudyModulars = async () => {
  const { data } = await client.query({
    query: gql`
      query ListCaseStudyModulars {
        caseStudyModulars(orderBy: publishedAt_DESC) {
          id
          title
          slug
          client
          category
          excerpt
          coverImage {
            url
            altText
          }
        }
      }
    `,
    fetchPolicy: 'no-cache', // avoids showing stale data during authoring
  });

  return data.caseStudyModulars;
};

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

// Return up to 3 other case-study pages in the same category, excluding self
export const listRelatedCaseStudyModulars = async (category, currentSlug) => {
  const { data } = await client.query({
    query: gql`
      query RelatedCS(
        $category: Category!
        $current: String!
      ) {
        caseStudyModulars(
          where: {
            AND: [
              { category: $category }
              { slug_not: $current }
            ]
          }
          orderBy: publishedAt_DESC
          first: 3
        ) {
          slug
          title
          category
          coverImage { url altText }
        }
      }
    `,
    variables: { category, current: currentSlug },
    fetchPolicy: 'no-cache',
  });

  return data.caseStudyModulars;
};


export const getCaseStudyModularBySlug = async (slug) => {
  try {
    console.log('Case Study Slug: ' + slug);
    const { data, errors } = await client.query({
        query: gql`
            query GetCaseStudyBySlug($slug: String!) {
                caseStudyModular(where: { slug: $slug }) {
                  slug
                  id
                  title
                  category 
                  client
                  coverImage {     
                    url       
                    altText
                  }                  
                  components {
                    __typename

                    ... on CsBulletWithImage {
                      id
                      bulletBody: body {
                        html
                      }
                      bulletImage: image {
                        url
                        altText
                      }
                    }

                    ... on CsCalloutBox {
                      id
                      variant
                      calloutBody: body {
                        html
                      }
                    }

                    ... on CsIntroText {
                      id
                      introHeadline: headline
                      introBody: body {
                        html
                      }
                    }

                    ... on CsNarrowRegularText {
                      id
                      narrowHeadline: headline
                      narrowBody: body {
                        html
                      }
                    }

                    ... on CsWideImage {
                      id
                      wideTitle: title
                      wideImage: image {
                        url
                        altText
                      }
                    }

                    ... on CsWideRegularText {
                      id
                      wideHeadline: headline
                      wideBody: body {
                        html
                      }
                    }
                  }  
                }
              }
        `,
        variables: { slug },
    });

    return data.caseStudyModular;
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

/**
 * Returns up to three case-study entries that have
 * `featured = true`, sorted by the custom “Featured Order” field.
 * (Assuming the field API ID is `featuredOrder`; change if different.)
 */
export const listHomePageCaseStudies = async () => {
  const { data } = await client.query({
    query: gql`
      query HomePageCaseStudies {
        caseStudyModulars(
          where: { featured: true }
          orderBy: featuredOrder_ASC
          first: 3
        ) {
          id
          slug
          title
          category
          excerpt
          client
          coverImage { url altText }
        }
      }
    `,
    fetchPolicy: "no-cache",
  });

  return data.caseStudyModulars;
};
