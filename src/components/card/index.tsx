import React from 'react'
import { ComponentNode } from '@variousjs/various'
import { useParams } from 'react-router-dom'
import { Store } from '../../types'

const H = ((props) => {
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <h3>Card</h3>
      <p>Route params: {id || 'empty'}</p>
      <div>
        <div
          className="btn"
          onClick={() => props.$dispatch({ name: 'next', action: 'setValue', value: 1 })}
        >
          Value
        </div>
        <div
          className="btn"
          onClick={() => props.$dispatch({
            name: 'app',
            action: 'setLocale',
            value: props.$store.locale === 'zh' ? 'en' : 'zh',
          })}
        >
          Locale
        </div>
        <div
          className="btn"
          onClick={async () => {
            const a = `${Math.random().toFixed(2)}`
            await props.$dispatch({
              name: 'app',
              action: 'setName',
              value: a,
            })
          }}
        >
          Store
        </div>
      </div>
    </>
  )
}) as ComponentNode<Store>

H.logName = () => alert('Card')

export default H
