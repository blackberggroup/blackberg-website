import { gql } from "@apollo/client";
import client from "@/app/lib/apollo-client";

/* ── LIST ─────────────────────────────────────────────────── */
export const listCaseStudyModulars = async () => {
  const { data } = await client.query({
    query: gql`
      query ListCaseStudyModulars {
        caseStudyModulars(orderBy: projectDate_DESC) {
          id
          title
          slug
          client
          serviceLines
          excerpt
          projectDate
          coverImage { url altText }
        }
      }
    `,
    fetchPolicy: "no-cache",
  });
  return data.caseStudyModulars;
};

/* ── LEGACY HELPERS (unchanged) ──────────────────────────── */
export const getAllCaseStudies = async () => { /* … unchanged … */ };
export const getFeaturedCaseStudies = async () => { /* … unchanged … */ };
export const getCaseStudyBySlug = async slug => { /* … unchanged … */ };

/* ── RELATED ─────────────────────────────────────────────── */
export const listRelatedCaseStudyModulars = async (
  serviceLine,
  currentSlug
) => {
  const { data } = await client.query({
    query: gql`
      query RelatedCS($lines: [ServiceLines!]!, $current: String!) {
        caseStudyModulars(
          where: {
            AND: [
              { serviceLines_contains_some: $lines }
              { slug_not: $current }
            ]
          }
          orderBy: publishedAt_DESC
          first: 3
        ) {
          slug
          title
          serviceLines
          coverImage { url altText }
        }
      }
    `,
    variables: { lines: [serviceLine], current: currentSlug },
    fetchPolicy: "no-cache",
  });
  return data.caseStudyModulars;
};

/* ── DETAIL ──────────────────────────────────────────────── */
export const getCaseStudyModularBySlug = async slug => {
  const { data } = await client.query({
    query: gql`
      query GetCaseStudyModularBySlug($slug: String!) {
        caseStudyModular(where: { slug: $slug }) {
          slug id title client serviceLines
          coverImage { url altText }
          components {
            __typename
            ... on CsBulletWithImage {
              id
              bulletBody: body { html }
              bulletImage: image { url altText }
            }
            ... on CsCalloutBox {
              id variant
              calloutBody: body { html }
            }
            ... on CsIntroText {
              id introHeadline: headline
              introBody: body { html }
            }
            ... on CsNarrowRegularText {
              id narrowHeadline: headline
              narrowBody: body { html }
            }
            ... on CsWideImage {
              id wideTitle: title
              wideImage: image { url altText }
            }
            ... on CsWideRegularText {
              id wideHeadline: headline
              wideBody: body { html }
            }
          }
        }
      }
    `,
    variables: { slug },
  });
  return data.caseStudyModular;
};

/* ── HOMEPAGE ─────────────────────────────────────────────── */
export const listHomePageCaseStudies = async () => {
  const { data } = await client.query({
    query: gql`
      query HomePageCaseStudies {
        caseStudyModulars(
          where: { featured: true }
          orderBy: featuredOrder_ASC
          first: 3
        ) {
          id slug title serviceLines excerpt client
          coverImage { url altText }
        }
      }
    `,
    fetchPolicy: "no-cache",
  });
  return data.caseStudyModulars;
};
