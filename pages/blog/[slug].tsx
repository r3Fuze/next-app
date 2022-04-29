import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { ParsedUrlQuery } from "querystring"
import { useRouter } from "next/router"
import { NextSeo } from "next-seo"
import { Post } from "@/graphql/generated/graphql"
import client from "@/graphql/apollo-client"
import { GET_ALL_POSTS, GET_POST_BY_SLUG } from "@/graphql/queries"
import Link from "next/link"

const BlogPost: NextPage<{ post: Post }> = ({ post }) => {
  const router = useRouter()

  if (router.isFallback) return <div>Loading...</div>

  return (
    <>
      <NextSeo title={post.title} />
      <div className="post">
        <Link href="/blog">
          <a>Go back</a>
        </Link>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as ParsedUrlQuery & { slug: string }

  const { data, error } = await client.query<{ post: Post }>({
    query: GET_POST_BY_SLUG,
    variables: {
      slug,
    },
  })

  if (error) throw error

  return {
    props: {
      post: data.post,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<{ posts: Post[] }>({
    query: GET_ALL_POSTS,
  })

  return {
    paths: data.posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  }
}

export default BlogPost
