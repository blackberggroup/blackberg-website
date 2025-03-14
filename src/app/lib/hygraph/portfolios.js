import { gql } from '@apollo/client';
import client from '@/app/lib/apollo-client';

export const getAllPortfolios = async () => {
  const { data } = await client.query({
      query: gql`
          query GetAllPortfolios { 
          portfolios {
                clientName
                description
                gallery {
                url
                }
                layoutStyle
                portfolioCategory {
                title
                slug
                }
                slug
                title
            }
          }
      `,
  });
  console.log('portfolios: ', data.portfolios);
  return data.portfolios
}

export const getPortfolioBySlug = async (slug) => {
  const { data, errors } = await client.query({
      query: gql`
          query GetPortfolioBySlug($slug: String!) {
              portfolio(where: { slug: $slug }) {
                  id
                  title
                  slug
                  portfolioCategory
                  clientName
                  description
                  gallery
                  layoutStyle
              }
            }
      `,
      variables: { slug },
  });

  if (errors) {
      const error = apolloError;
      //throw new Error("Failed to fetch portfolio.");
      console.log('Error: ', error);
  }

  return data.portfolio
}