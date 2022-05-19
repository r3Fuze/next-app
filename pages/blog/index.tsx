import { Post } from "@/graphql/generated/graphql"
import { GetStaticProps, NextPage } from "next"
import Link from "next/link"
import client from "@/graphql/apollo-client"
import { GET_ALL_POSTS } from "@/graphql/queries"
import { NextSeo } from "next-seo"

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <NextSeo title="Posts" />
      <div>
        <Link href="/">
          <a>Go home</a>
        </Link>
        <h1>This is my blog</h1>
        <div className="posts">
          {posts.map((post) => (
            <h2 key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <a className="post">{post.title}</a>
              </Link>
            </h2>
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<{ posts: Post[] }>({
    query: GET_ALL_POSTS,
  })

  return {
    props: {
      posts: data.posts,
    },
  }
}

export default Blog
