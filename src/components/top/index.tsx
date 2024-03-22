import React, { FC } from 'react'
import { ComponentProps, getConfig, ComponentNode } from '@variousjs/various'
import { useNavigate } from 'react-router-dom'
import { Menu, Card } from 'shadcn-ui'
import { Config, Store } from '../../types'

export const H: FC<ComponentProps<Store>> = () => {
  const $config = getConfig() as Config
  const navigate = useNavigate()

  const onRouterChange = (p: string) => {
    navigate(p)
  }

  return (
    <Menu.Menubar>
      {$config.links.map(({ path, name }) => (
        <Menu.MenubarMenu key={path}>
          <Menu.MenubarTrigger onClick={() => onRouterChange(path)}>{name}</Menu.MenubarTrigger>
        </Menu.MenubarMenu>
      ))}
    </Menu.Menubar>
  )
}

export const S = ((props) => {
  return (
    <Card.Card>
      <Card.CardHeader>
        <Card.CardTitle>Global Store</Card.CardTitle>
        <Card.CardDescription>{props.$store.user.name}</Card.CardDescription>
      </Card.CardHeader>
    </Card.Card>
  )
}) as ComponentNode<Store>
