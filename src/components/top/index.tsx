import React, { FC } from 'react'
import { ComponentProps, getConfig } from '@variousjs/various'
import { useNavigate } from 'react-router-dom'
import { Button, Alert, AlertDescription, AlertTitle } from 'shadcn-ui'
import { RocketIcon } from "@radix-ui/react-icons"
import { Config, Store } from '../../types'

const H: FC<ComponentProps<Store>> = (props) => {
  const $config = getConfig() as Config
  const navigate = useNavigate()

  const onRouterChange = (p: string) => {
    navigate(p)
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
      <Button
        onClick={() => props.$dispatch('card', 'getName', 'Card')}
      >
        Card Name
      </Button>
      <Alert>
      <RocketIcon className="h-8 w-8" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
      </div>
    </>
  )
}

export default H
