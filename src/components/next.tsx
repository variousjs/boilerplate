import React, { Component } from 'react'
import { ComponentProps, Store, Connect as CT, Invoker, Ii8n } from '@variousjs/various'
import { Descriptions } from 'antd'
import { Store as GlobalStore } from '../types'
import zh from './i18n/zh.json'
import en from './i18n/en.json'

type S = { value: number }
type Connect = CT<S>

const {
  createStore,
  connect,
  emit,
  getStore,
} = new Store<S>()

createStore({ value: 0 })

class X extends Component<Connect & ComponentProps<GlobalStore>> {
  static setValue: Invoker = async ({ value }) => {
    const store = getStore()
    emit({ value: value + store.value }, true)
  }

  static $i18n: Ii8n = () => ({
    localeKey: 'locale',
    resources: { zh, en },
  })

  render() {
    const { user } = this.props.$store
    const { value, $t } = this.props

    return (
      <Descriptions
        style={{ marginTop: 30 }}
        bordered
        title="Next Component"
        size="small"
      >
        <Descriptions.Item label="Store">{user.name}</Descriptions.Item>
        <Descriptions.Item label="Value">{value}</Descriptions.Item>
        <Descriptions.Item label="Title">{$t('title', { name: 'various' })}</Descriptions.Item>
      </Descriptions>
    )
  }
}

export default connect('value')(X)
