import { gql } from '@apollo/client';
import client from '@/app/lib/apollo-client';

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