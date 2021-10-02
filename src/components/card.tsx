import React, { FC } from 'react'
import { ComponentProps } from '@variousjs/various'
import { Card } from 'antd'
import csses from './card.less'

const H: FC<ComponentProps> = (props) => {
  const id = props.$router?.match.params.id

  return (
    <div className={csses.container}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Card.Meta
          title="Current Route Params"
          description={id || 'none'}
        />
      </Card>
    </div>
  )
}

export default H
