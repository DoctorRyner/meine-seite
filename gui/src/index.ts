import { Router } from "@/components/Router/Router"
import "@/index.scss"
import { createElement } from "react"
import ReactDOM from "react-dom/client"

ReactDOM.createRoot(document.getElementById("root")!).render(
  createElement(Router)
)
