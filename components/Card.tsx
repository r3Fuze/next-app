import Link from "next/link"
import styles from "@/styles/Card.module.css"

type PartialURL = Partial<URL> & { pathname: string }

type LinkWrapperProps = {
  href: string | PartialURL
  children: React.ReactNode
}

type CardProps = {
  href: string | PartialURL
  title: string
  description: string
}

// Extract into own component?
const LinkWrapper = ({ href, children }: LinkWrapperProps) => {
  const isExternal =
    typeof href === "string"
      ? href.startsWith("http")
      : href.protocol !== undefined

  if (isExternal) {
    return <>{children}</>
  } else {
    return <Link href={href}>{children}</Link>
  }
}

const Card = ({ href, title, description }: CardProps) => {
  return (
    <LinkWrapper href={href}>
      <a href={href as string} className={styles.card}>
        <h2>{title} &rarr;</h2>
        <p>{description}</p>
      </a>
    </LinkWrapper>
  )
}

export default Card
