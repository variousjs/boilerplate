import { App } from '@variousjs/various'
import { Store } from '../../types'

const actions: App<Store>['actions'] = {
  async setName({ emit, getStore }, value) {
    await new Promise((r) => window.setTimeout(r, 1000))
    const user = getStore('user')
    user.name = value
    emit({ user })
  },
  async getName({ getStore }) {
    const { user } = getStore()
    return user.name
  },
  async setLocale({ emit }, value) {
    emit({ locale: value })
  }
}

export default actions
