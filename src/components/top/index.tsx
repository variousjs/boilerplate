import React, { FC } from 'react'
import { ComponentProps, getConfig, ComponentNode } from '@variousjs/various'
import { useNavigate } from 'react-router-dom'
import { Config, Store } from '../../types'

export const H: FC<ComponentProps<Store>> = () => {
  const $config = getConfig() as Config
  const navigate = useNavigate()

  const onRouterChange = (p: string) => {
    navigate(p)
  }

  return (
    <div>
      {$config.links.map(({ path, name }) => (
        <div className="btn" onClick={() => onRouterChange(path)} key={path}>
          {name}
        </div>
      ))}
    </div>
  )
}

export const S = ((props) => {
  return (
    <div>Srore: {props.$store.user.name}</div>
  )
}) as ComponentNode<Store>
