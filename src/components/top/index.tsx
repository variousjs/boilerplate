import React, { FC } from 'react'
import { VariousProps, getConfig, VariousFC, version } from '@variousjs/various'
import { useNavigate } from 'react-router-dom'
import { Config, Store } from '../../types'

export const H: FC<VariousProps<{}, Store>> = () => {
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
    <div>
      <p>Srore: {props.$store.user.name}</p>
      <p>Version: {version}</p>
    </div>
  )
}) as VariousFC<{}, Store>
