import React, { FC } from 'react'
import { ComponentProps, getConfig } from '@variousjs/various'
import { useHistory } from 'react-router-dom'
import { Config, Store } from '../types'

const H: FC<ComponentProps<Store>> = (props) => {
  const $config = getConfig() as Config
  const history = useHistory()

  const onRouterChange = (p: string) => {
    history.push(p)
  }

  return (
    <>
    {
      $config.links.map(({ path, name }) => (
        <button key={path} value={path} onClick={() => onRouterChange(path)}>
          {name}
        </button>
      ))
    }
    <div>
      Store:
      <p>{props.$store.user.name}</p>
      <button
        style={{ marginLeft: 10 }}
        onClick={() => props.$dispatch('card', 'getName', 'Card')}
      >
        Card Name
      </button>
      </div>
    </>
  )
}

export default H
