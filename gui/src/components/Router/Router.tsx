import { App } from "@/components/App/App"
import { Home } from "@/pages/Home/Home"
import { Portfolio } from "@/pages/Portfolio/Portfolio"
import { PortfolioRegiM } from "@/pages/Portfolio/PortfolioRegiM/PortfolioRegiM"
import { Test } from "@/pages/Test/Test"
import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

enum Page {
  home = "/",
  test = "test",
  portfolio = "portfolio",
}

enum PortfolioPage {
  RegiM = "RegiM",
}

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={Page.home} element={<App />}>
        <Route index element={<Home />} />
        <Route path={Page.test} element={<Test />} />
        <Route path={Page.portfolio} element={<Portfolio />}>
          <Route path={PortfolioPage.RegiM} element={<PortfolioRegiM />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
