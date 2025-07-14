import { gql } from '@apollo/client';
import client from '@/app/lib/apollo-client';

function buildFullPath(page) {
  let slugs = [];
  let current = page;
  while (current) {
    if (current.slug) slugs.unshift(current.slug);
    current = current.parentPage;
  }
  return '/' + slugs.join('/');
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
              parentPage {
                slug
                parentPage {
                  slug
                }
              }
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

    const pages = data.pages.map(page => buildFullPath(page));
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