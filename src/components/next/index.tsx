import React, { Component } from 'react'
import { VariousProps, Nycticorax, PublicAction, I18n } from '@variousjs/various'
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

class X extends Component<VariousProps<S, Store>> {
  static setValue: PublicAction = async (value) => {
    const store = getStore()
    emit({ value: value.payload + store.value }, true)
  }

  static $i18n: I18n = () => ({
    resources: { zh, en },
  })

  render() {
    const { user } = this.props.$store
    const { value, $t, $dispatch } = this.props

    return (
      <>
        <h3>Next</h3>
        <div>
          <ul>
            <li>Store: {user.name}</li>
            <li>Value: {value}</li>
            <li>Locale: {$t('title', { name: 'various' })}</li>
          </ul>
          <div
            className="btn"
            onClick={() => $dispatch({
              target: 'card',
              action: 'logName',
            })}
          >
            Name
          </div>
        </div>
      </>
    )
  }
}

export default connect('value')(X)
