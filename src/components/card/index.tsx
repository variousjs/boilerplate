import React from 'react'
import { VariousFC } from '@variousjs/various'
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
          onClick={() => props.$dispatch({ target: 'next', action: 'setValue', payload: 1 })}
        >
          Value
        </div>
        <div
          className="btn"
          onClick={() => props.$dispatch({
            target: 'app',
            action: 'setLocale',
            payload: props.$store.locale === 'zh' ? 'en' : 'zh',
          })}
        >
          Locale
        </div>
        <div
          className="btn"
          onClick={async () => {
            const a = `${Math.random().toFixed(2)}`
            await props.$dispatch({
              target: 'app',
              action: 'setName',
              payload: a,
            })
          }}
        >
          Store
        </div>
      </div>
    </>
  )
}) as VariousFC<{}, Store>

H.logName = () => window.alert('Card')

export default H
