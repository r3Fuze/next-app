import { gql } from "@apollo/client"

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    posts {
      id
      title
      slug
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      content
    }
  }
`
