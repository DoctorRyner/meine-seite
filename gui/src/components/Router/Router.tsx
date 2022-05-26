import { App } from "@/components/App/App"
import { Home } from "@/pages/Home/Home"
import { Test } from "@/pages/Test/Test"
import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export enum Page {
  home = "/",
  test = "test"
}

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={Page.home} element={<App />}>
        <Route index element={<Home />} />
        <Route path={Page.test} element={<Test />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
