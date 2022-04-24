import type { NextPage } from "next"
import Link from "next/link"
import useFetch from "@/hooks/useFetch"

type ApiResponse = {
  name: string
}

const About: NextPage = () => {
  const { data, error, isLoading } = useFetch<ApiResponse>("/api/hello")

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1>About Page</h1>
      <span>{data?.name}</span>
      <br />
      <Link href="/">Go home</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas
        nesciunt quaerat cupiditate illo vero a nostrum minima molestias,
        dolorem sapiente expedita neque dolorum veritatis? Temporibus eligendi
        id iusto enim? Dolor, soluta! Corrupti explicabo rem ut porro, sunt
        quam. Quos, perferendis? Corrupti temporibus quibusdam at hic quia
        laborum iste itaque odio ipsam amet animi, corporis quisquam culpa sint,
        aliquam tempore? Molestiae sunt distinctio maiores, optio quibusdam quo,
        quisquam aut amet dolorem fugit, quos eius veniam officia tempora
        numquam! Nam deserunt vero consectetur, deleniti perferendis praesentium
        et tenetur modi sapiente quod.
      </p>
    </div>
  )
}

export default About
