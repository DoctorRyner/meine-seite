import { App } from "@/components/App/App"
import { Home } from "@/pages/Home/Home"
import { Test } from "@/pages/Test/Test"
import { identity } from "ramda"
import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export type Page = "/" | "test"

export const page: (path: Page) => Page = identity

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={page("/")} element={<App />}>
        <Route index element={<Home />} />
        <Route path={page("test")} element={<Test />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
