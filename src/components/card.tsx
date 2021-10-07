import React, { FC } from 'react'
import { ComponentProps } from '@variousjs/various'
import { Card, Button, message } from 'antd'
import csses from './card.less'

const H: FC<ComponentProps> & { getName: (e: string) => any } = (props) => {
  const id = props.$router?.match.params.id

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
          </Button> : null,
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

H.getName = (e) => message.info(e)

export default H
