import store from './entry/store'

export type Store = typeof store
export type Config = {
  pages: {
    path: string[],
    components: string[],
  }[]
}
