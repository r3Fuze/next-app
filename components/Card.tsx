import React from "react"
import styles from "../styles/Card.module.css"

const Card: React.FC<{ href?: string; title: string; description: string }> = (
  props
) => {
  return (
    <a href={props.href} className={styles.card}>
      <h2>{props.title} &rarr;</h2>
      <p>{props.description}</p>
    </a>
  )
}

export default Card
