import { createHmac } from "crypto"
import { Post } from "@/graphql/generated/graphql"

type SignatureType = {
  body: {
    data: Post
  }
  signature: string
  secret: string | undefined
}

export const verifyWebhookSignature = ({
  body,
  signature,
  secret,
}: SignatureType): boolean => {
  if (secret === undefined) {
    console.error("Signature cannot be undefined")
    return false
  }

  console.log("Verifying webhook signature")

  const [rawSign, rawEnv, rawTimestamp] = signature.split(", ")

  const sign = rawSign.replace("sign=", "")
  const environmentName = rawEnv.replace("env=", "")
  const timestamp = parseInt(rawTimestamp.replace("t=", ""))

  const payload = JSON.stringify({
    Body: JSON.stringify(body),
    EnvironmentName: environmentName,
    TimeStamp: timestamp,
  })

  const hash = createHmac("sha256", secret).update(payload).digest("base64")

  console.log({ sign, hash })

  return sign === hash
}
