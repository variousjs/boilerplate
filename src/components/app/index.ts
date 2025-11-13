import { App } from '@variousjs/various'
import actions from './actions'
import store from './store'
import Container from './container'
import Loader from './loader'
import Error from './error'

const entry: App<typeof store> = {
  store,
  Root: Container,
  Fallback: Loader,
  ErrorFallback: Error,
  actions,
}

export default entry
