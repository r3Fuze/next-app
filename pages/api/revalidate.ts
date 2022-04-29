import type { Post } from "@/graphql/generated/graphql"
import type { NextApiRequest, NextApiResponse } from "next"
import { verifyWebhookSignature } from "@/lib/utils"
import client from "@/graphql/apollo-client"

interface NextApiRequestWithBody extends NextApiRequest {
  body: {
    data: Post
  }
}

type ResponseType = {
  revalidated?: boolean
  message?: string
}

export default async function handler(
  req: NextApiRequestWithBody,
  res: NextApiResponse<ResponseType>
) {
  console.log(req.headers)
  if (!req.headers["gcms-signature"]) {
    console.error("Missing signature")
    return res.status(401).json({ message: "Missing signature" })
  }

  if (
    !verifyWebhookSignature({
      body: req.body,
      signature: req.headers["gcms-signature"] as string,
      secret: process.env.GRAPHCMS_SIGNATURE,
    })
  ) {
    console.error("Invalid signature")
    return res.status(401).json({ message: "Invalid signature" })
  }

  const post = req.body.data

  if (req.headers?.secret !== process.env.REVALIDATE_TOKEN) {
    console.error("Invalid token")
    return res.status(401).json({ message: "Invalid token" })
  }

  console.log("Post title", post.title)

  try {
    await client.clearStore()
    await client.resetStore()
    await res.unstable_revalidate(`/blog/${post.slug}`)
    console.log(`Revalidated /blog/${post.slug}`)
    return res.json({ revalidated: true })
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    }
    return res.status(500).json({ message: "Error revalidating" })
  }
}
