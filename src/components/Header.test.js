import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "./Header"

describe("<Header />", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div")
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
        div
      )
    })
    it("renders a logo with a src and alt", () => {
      const div = document.createElement("div")
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
        div
      )
    })
    it("has clickable links", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
        userEvent.click(screen.getByText("View the Animals"))
        expect(screen.getByText("View the Animals")).toBeInTheDocument()
        userEvent.click(screen.getByText("Create a Profile"))
        expect(screen.getByText("Create a Profile")).toBeInTheDocument()
        userEvent.click(screen.getByText("Edit your Profile"))
        expect(screen.getByText("Edit your Profile")).toBeInTheDocument()
    })
  })