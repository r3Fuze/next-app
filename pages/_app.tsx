import { useEffect } from "react"
import { useRouter } from "next/router"
import type { AppProps } from "next/app"
import { DefaultSeo, DefaultSeoProps } from "next-seo"
import NProgress from "nprogress"

import favicon from "@/public/favicon.ico"
import "@/styles/nprogress.css"
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components"

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

const theme: DefaultTheme = {
  colors: {
    primary: "#0070f3",
  },
}

const meta: DefaultSeoProps = {
  titleTemplate: "%s | Next",
  title: "Home",
  description: "Generated by create next app",
  additionalLinkTags: [
    {
      rel: "icon",
      href: favicon.src,
    },
  ],
}

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  NProgress.configure({
    showSpinner: false,
  })

  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    router.events.on("routeChangeStart", handleRouteStart)
    router.events.on("routeChangeComplete", handleRouteDone)
    router.events.on("routeChangeError", handleRouteDone)

    return () => {
      router.events.off("routeChangeStart", handleRouteStart)
      router.events.off("routeChangeComplete", handleRouteDone)
      router.events.off("routeChangeError", handleRouteDone)
    }
  }, [router])

  return (
    <div>
      <GlobalStyle />
      <DefaultSeo {...meta} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default CustomApp
