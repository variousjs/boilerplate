import React, { Component } from 'react'
import Nycticorax, { Connect as CT } from 'nycticorax'
import { ComponentProps } from '@variousjs/various'
import { Descriptions } from 'antd'
import { Store as GlobalStore } from '../types'

type Store = { value: number }
type Connect = CT<Store>

const {
  createStore,
  connect,
  dispatch,
  getStore,
} = new Nycticorax<Store>()

createStore({ value: 0 })

class X extends Component<Connect & ComponentProps<GlobalStore>> {
  static setValue = async (value: number) => {
    const store = getStore()
    dispatch({ value: value + store.value }, true)
  }

  render() {
    const { user } = this.props.$store
    const { value } = this.props

    return (
      <Descriptions
        style={{ marginTop: 30 }}
        bordered
        title="Next Component"
        size="small"
      >
        <Descriptions.Item label="Store">{user.name}</Descriptions.Item>
        <Descriptions.Item label="Value">{value}</Descriptions.Item>
      </Descriptions>
    )
  }
}

export default connect('value')(X)
