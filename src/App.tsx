import { Home } from './screen/home'
import { AppProvider } from './hooks/index'
import GlobalStyles from './styles/global'
import { ToastContainer } from 'react-toastify'

export function App() {

  return (
      <AppProvider>
        <Home />
        <GlobalStyles />
        <ToastContainer autoClose={1500} theme="colored"/>
      </AppProvider>
  )
}
