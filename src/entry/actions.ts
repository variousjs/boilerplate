import { Actions } from '@variousjs/various'
import { Store } from '../types'

const actions: Actions<Store> = {
  async setName({ emit, getStore }, { value }) {
    await new Promise((r) => setTimeout(r, 1000))
    const { user } = getStore()
    user.name = value
    emit({ user })
  },
  async getName({ getStore }) {
    const { user } = getStore()
    return user.name
  },
}

export default actions
