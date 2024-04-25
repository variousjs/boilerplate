import React from 'react'
import { ComponentNode } from '@variousjs/various'
import { useParams } from 'react-router-dom'
import { Button } from 'shadcn-ui'
import { Store } from '../../types'

const H = ((props) => {
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <h3>Card</h3>
      <p>Route params: {id || 'empty'}</p>
      <div className="flex justify-between">
        <Button
          onClick={() => props.$dispatch('next', 'setValue', 1)}
          variant="secondary"
        >
          Value
        </Button>
        <Button
          variant="outline"
          onClick={() => props.$dispatch('app', 'setLocale', props.$store.locale === 'zh' ? 'en' : 'zh')}
        >
          Locale
        </Button>
        <Button
          onClick={async () => {
            const a = `${Math.random().toFixed(2)}`
            await props.$dispatch('app', 'setName', a)
          }}
        >
          Store
        </Button>
      </div>
    </>
  )
}) as ComponentNode<Store>

H.logName = () => alert('Card')

export default H
