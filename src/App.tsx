/* eslint-disable react/react-in-jsx-scope */
import { ToastContainer } from "react-toastify"

import { AppProvider } from "./hooks/index"
import { Home } from "./screen/home"
import GlobalStyles from "./styles/global"

export function App() {
  return (
    <AppProvider>
      <Home />
      <GlobalStyles />
      <ToastContainer autoClose={1500} theme="light" />
    </AppProvider>
  )
}
