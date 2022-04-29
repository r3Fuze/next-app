import Card from "@/components/Card"
import type { NextPage } from "next"
import Image from "next/image"
import styles from "@/styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <Card
            href="https://nextjs.org/docs"
            title="Documentation"
            description="Find in-depth information about Next.js features and API."
          />
          <Card
            href="https://nextjs.org/learn"
            title="Learn"
            description="Learn about Next.js in an interactive course with quizzes!"
          />
          <Card
            href="https://github.com/vercel/next.js/tree/canary/examples"
            title="Examples"
            description="Discover and deploy boilerplate example Next.js projects."
          />
          <Card
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Deploy"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
          />
          <Card
            href="/about"
            title="About"
            description="Go to the about page! There are things about things there!"
          />
          <Card
            href="/blog"
            title="Blog"
            description="Go to the blog page! A page where there a blog posts!"
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
