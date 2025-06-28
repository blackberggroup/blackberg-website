import { gql } from '@apollo/client';
import client from '@/app/lib/apollo-client';

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
          caseStudyModulars {
            slug
          }
          careers {
            slug
          }
        }
      `,
    });

    console.error("Sitemap data:", data);
    const pages = data.pages.map(({ slug, parentPage }) => {
      if (parentPage && parentPage.slug) {
        return `/${parentPage.slug}/${slug}`;
      }
      return `/${slug}`;
    });  
    const insights = data.insights.map(({ slug }) => `/insights/${slug}`);
    const caseStudies = data.caseStudyModulars.map(({ slug }) => `/case-studies/${slug}`);
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

  export default getAllPagePaths;