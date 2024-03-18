import React, { Component } from 'react'
import { ComponentProps, Nycticorax, Invoker, I18n } from '@variousjs/various'
import { Store } from '../../types'
import zh from './i18n/zh.json'
import en from './i18n/en.json'

type S = { value: number }

const {
  createStore,
  connect,
  emit,
  getStore,
} = new Nycticorax<S>()

createStore({ value: 0 })

class X extends Component<S & ComponentProps<Store>> {
  static setValue: Invoker = async (value) => {
    const store = getStore()
    emit({ value: value + store.value }, true)
  }

  static $i18n: I18n = () => ({
    localeKey: 'locale',
    resources: { zh, en },
  })

  render() {
    const { user } = this.props.$store
    const { value, $t } = this.props

    return (
      <div
        style={{ marginTop: 30 }}
        title="Next Component"
      >
        <h2>Next Component</h2>
        <p>{user.name}</p>
        <p>{value}</p>
        <p>{$t('title', { name: 'various' })}</p>
      </div>
    )
  }
}

export default connect('value')(X)
