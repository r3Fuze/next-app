import Link from "next/link"
import styles from "../styles/Card.module.css"

type PartialURL = Partial<URL> & { pathname: string }

// Extract into own component?
const LinkWrapper: React.FC<{
  href: string | PartialURL
  children: React.ReactNode
}> = ({ href, children }) => {
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

const Card: React.FC<{
  href: string | PartialURL
  title: string
  description: string
}> = (props) => {
  return (
    <LinkWrapper href={props.href}>
      <a href={props.href as string} className={styles.card}>
        <h2>{props.title} &rarr;</h2>
        <p>{props.description}</p>
      </a>
    </LinkWrapper>
  )
}

export default Card
