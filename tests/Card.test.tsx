import { render, screen } from "@testing-library/react"
import Card from "@/components/Card"

describe("<Card />", () => {
  it("has a header with an arrow suffix", () => {
    render(<Card href="/" title="Title" description="Description" />)

    const heading = screen.getByRole("heading", {
      name: /title/i,
    })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/→/)
  })

  it("has a description", () => {
    render(<Card href="/" description="Description" title="Title" />)

    const paragraph = screen.getByText(/description/i)

    expect(paragraph).toBeInTheDocument()
  })

  it("has an anchor tag if the link is internal", () => {
    render(<Card href="/" title="" description="" />)

    const anchor = screen.getByRole("link")

    expect(anchor).toBeInTheDocument()
  })

  it("has an anchor tag if the link is external", () => {
    render(<Card href="https://github.com" title="" description="" />)

    const anchor = screen.getByRole("link")

    expect(anchor).toBeInTheDocument()
  })

  it("has an anchor tag if the link is a URL object", () => {
    render(
      <Card
        href={{
          pathname: "/",
        }}
        title=""
        description=""
      />
    )

    const anchor = screen.getByRole("link")

    expect(anchor).toBeInTheDocument()
  })
})
