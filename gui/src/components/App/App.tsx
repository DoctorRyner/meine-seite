import { store } from "@/redux/store"
import { FC, StrictMode } from "react"
import { Provider } from "react-redux"
import { Outlet } from "react-router-dom"

export const App: FC = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </StrictMode>
  )
}
