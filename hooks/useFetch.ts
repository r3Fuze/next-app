import useSWR, { Fetcher } from "swr"

const useFetch = <T>(url: string) => {
  const fetcher: Fetcher<T> = (input: RequestInfo, init?: RequestInit) =>
    fetch(input, init).then((res) => res.json())

  const { data, error } = useSWR<T, Error>(url, fetcher)

  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

export default useFetch
