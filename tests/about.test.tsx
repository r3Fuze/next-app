import { render, screen } from "@testing-library/react"
import About from "@/pages/about"

jest.mock("@/lib/useFetch", () => {
  return () => ({
    data: {
      name: "John Doe",
    },
  })
})

describe("About", () => {
  it("renders a heading", () => {
    render(<About />)

    const heading = screen.getByRole("heading", {
      name: /About/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
