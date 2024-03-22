import React from 'react'
import { ComponentNode } from '@variousjs/various'
import { useParams } from 'react-router-dom'
import { Card, Button } from 'shadcn-ui'
import { Store } from '../../types'

const H = ((props) => {
  const { id } = useParams<{ id: string }>()

  return (
    <Card.Card>
      <Card.CardHeader>
        <Card.CardTitle>Card Component</Card.CardTitle>
        <Card.CardDescription>Route params: {id || 'empty'}</Card.CardDescription>
      </Card.CardHeader>
      <Card.CardContent>
        <div className="flex justify-between">
          <Button
            onClick={() => props.$dispatch('next', 'setValue', 1)}
            variant="secondary"
          >
            Next
          </Button>
          <Button
            variant="outline"
            onClick={() => props.$dispatch('store', 'setLocale', props.$store.locale === 'zh' ? 'en' : 'zh')}
          >
            Locale
          </Button>
          <Button
            onClick={async () => {
              const a = `${Math.random().toFixed(2)}`
              await props.$dispatch('store', 'setName', a)
            }}
          >
            Store
          </Button>
        </div>
      </Card.CardContent>
    </Card.Card>
  )
}) as ComponentNode<Store>

H.logName = () => alert('Card')

export default H
