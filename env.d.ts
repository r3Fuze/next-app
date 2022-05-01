import "styled-components"

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string
      NODE_ENV: "development" | "production" | "test"
      NEXT_PUBLIC_GRAPHCMS_ENDPOINT: string
      NEXT_PUBLIC_REVALIDATE_TIME: string
      BASE_URL: string
      REVALIDATE_TOKEN: string
      GRAPHCMS_SIGNATURE: string
    }
  }
}

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
    }
  }
}

export {}
