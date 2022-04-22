import React from "react"
import Link from "next/link"
import styles from "../styles/Card.module.css"

// Extract into own component?
const LinkWrapper: React.FC<{
  href: string
  children: React.ReactNode
}> = ({ href, children }) => {
  return href.startsWith("http") ? (
    <>{children}</>
  ) : (
    <Link href={href}>{children}</Link>
  )
}

const Card: React.FC<{ href: string; title: string; description: string }> = (
  props
) => {
  return (
    <LinkWrapper href={props.href}>
      <a href={props.href} className={styles.card}>
        <h2>{props.title} &rarr;</h2>
        <p>{props.description}</p>
      </a>
    </LinkWrapper>
  )
}

export default Card
