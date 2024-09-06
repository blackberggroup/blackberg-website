import { gql } from '@apollo/client';
import client from '@/app/lib/apollo-client';

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