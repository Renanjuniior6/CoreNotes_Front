import { Home } from './screen/home'
import { AppProvider } from './hooks/index'
import GlobalStyles from './styles/global'

export function App() {

  return (
      <AppProvider>
        <Home />
        <GlobalStyles />
      </AppProvider>
  )
}
