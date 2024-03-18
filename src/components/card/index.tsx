import React from 'react'
import { ComponentNode } from '@variousjs/various'
import { useParams } from 'react-router-dom'
import { Store } from '../../types'
import csses from './index.less'

const H = ((props) => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className={csses.container}>
      <button
        key="next"
        onClick={() => props.$dispatch('next', 'setValue', 1)}
      >
        Next
      </button>
      <button
        key="locale"
        onClick={() => props.$dispatch('store', 'setLocale', props.$store.locale === 'zh' ? 'en' : 'zh')}
      >
        locale
      </button>
      <button
        key="store"
        onClick={async () => {
          const a = `${Math.random().toFixed(2)}`
          await props.$dispatch('store', 'setName', a)
        }}
      >
        Store
      </button>
      <p>{id || 'none'}</p>
    </div>
  )
}) as ComponentNode<Store>

H.getName = (e) => alert(e)

export default H
