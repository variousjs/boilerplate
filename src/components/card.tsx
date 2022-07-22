import React, { FC } from 'react'
import { ComponentProps, Invoker } from '@variousjs/various'
import { useParams } from 'react-router-dom'
import { Card, Button, message } from 'antd'
import { Store } from '../types'
import csses from './card.less'

const H: FC<ComponentProps<Store>> & { getName: Invoker } = (props) => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className={csses.container}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        actions={[
          id ? <Button
            key="next"
            onClick={() => props.$dispatch('next', 'setValue', 1)}
          >
            Next
          </Button> : <Button
            key="locale"
            onClick={() => props.$dispatch('store', 'setLocale', props.$store.locale === 'zh' ? 'en' : 'zh')}
          >
            locale
          </Button>,
          <Button
            key="store"
            type="primary"
            onClick={async () => {
              await props.$dispatch('store', 'setName', `${Math.random().toFixed(2)}`)
              message.info('changed')
            }}
          >
            Store
          </Button>
        ]}
      >
        <Card.Meta
          title="Route Params"
          description={id || 'none'}
        />
      </Card>
    </div>
  )
}

H.getName = (e) => message.info(e.value)

export default H
