import Link from "next/link"
import styles from "@/styles/Card.module.css"
import type { UrlObject } from "url"

type Url = string | UrlObject

type CardProps = {
  href: Url
  title: string
  description: string
}

const isExternal = (href: Url): boolean => {
  if (typeof href === "string") {
    return href.startsWith("http")
  } else {
    return href.protocol !== undefined
  }
}

const Card = ({ href, title, description }: CardProps) => {
  const LinkElement = isExternal(href) ? "a" : Link

  return (
    <LinkElement href={href as undefined & Url} className={styles.card}>
      <>
        <h2>{title} &rarr;</h2>
        <p>{description}</p>
      </>
    </LinkElement>
  )
}

export default Card
