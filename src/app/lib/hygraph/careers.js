import { gql } from '@apollo/client';
import client from '@/app/lib/apollo-client';

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
  //console.log('Careers: ', data.careers);
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