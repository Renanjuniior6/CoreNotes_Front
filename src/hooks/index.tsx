/* eslint-disable react/react-in-jsx-scope */
import { ReactNode } from "react"

import { FetchAPIProvider } from "./useFetchAPI"

type AppProviderProps = {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return <FetchAPIProvider>{children}</FetchAPIProvider>
}
