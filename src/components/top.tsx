import React, { FC, useState, useEffect } from 'react'
import { ComponentProps } from '@variousjs/various'
import { useLocation, useHistory } from 'react-router-dom'
import { Radio, Badge, Button } from 'antd'
import { Config, Store } from '../types'

const H: FC<ComponentProps<Store, Config>> = (props) => {
  const { pathname } = useLocation()
  const history = useHistory()
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(pathname)
  }, [])

  const onRouterChange = (e: any) => {
    history.push(e.target.value)
    setPath(e.target.value)
  }

  return (
    <>
    <Radio.Group
      size="large"
      value={path}
      onChange={onRouterChange}
      buttonStyle="solid"
    >
      {
        props.$config.links.map(({ path, name }) => (
          <Radio.Button key={path} value={path}>
            {name}
          </Radio.Button>
        ))
      }
    </Radio.Group>
    <div>
      Store:
      <Badge
        style={{ marginLeft: 10 }}
        count={props.$store.user.name}
      />
        <Button
          style={{ marginLeft: 10 }}
          onClick={() => props.$dispatch('card', 'getName', 'Card')}
        >
          Card Name
        </Button>
      </div>
    </>
  )
}

export default H
