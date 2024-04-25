import store from './components/app/store'

export type Store = typeof store
export type Config = {
  pages: {
    path: string,
    components: string[],
  }[],
  links: {
    path: string,
    name: string,
  }[]
}
