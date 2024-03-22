import React, { Component } from 'react'
import { ComponentProps, Nycticorax, Invoker, I18n } from '@variousjs/various'
import { Card, Button } from 'shadcn-ui'
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
    const { value, $t, $dispatch } = this.props

    return (
      <Card.Card>
        <Card.CardHeader>
          <Card.CardTitle>Next Component</Card.CardTitle>
          <Card.CardDescription>Global Store: {user.name}</Card.CardDescription>
        </Card.CardHeader>
        <Card.CardContent>
          <p>Component value: {value}</p>
          <p>Locale: {$t('title', { name: 'various' })}</p>
        </Card.CardContent>
        <Card.CardFooter>
          <Button
            onClick={() => $dispatch('card', 'logName')}
          >
            Name
          </Button>
        </Card.CardFooter>
      </Card.Card>
    )
  }
}

export default connect('value')(X)
