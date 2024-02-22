import { FC, ReactNode } from "react"
import { Provider } from "react-redux"
import store from "./store"

interface ProviderCalkType {
  children:ReactNode
}

const ReduxProvider:FC <ProviderCalkType> = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider