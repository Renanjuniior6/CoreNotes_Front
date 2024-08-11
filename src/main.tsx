import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/global.ts'
import { Home } from './screen/home/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <GlobalStyles />
  </StrictMode>,
)
