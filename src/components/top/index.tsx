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
    <div className="flex justify-between gap-10">
      {$config.links.map(({ path, name }) => (
        <div className="border-solid cursor-pointer rounded py-0.5 px-2 border-2 border-sky-500" onClick={() => onRouterChange(path)} key={path}>
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
