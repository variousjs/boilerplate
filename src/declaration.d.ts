// 这里直接配置 antd 依赖库，因为 antd 是 amd 依赖进来并不参与打包
declare module 'antd' {
  import { ComponentType, Component } from 'react'

  export const Spin: ComponentType<any>
  export class Radio extends Component<any> {
    static Group: ComponentType<any>
    static Button: ComponentType<any>
  }
  export class Card extends Component<any> {
    static Meta: ComponentType<any>
  }
}

declare module '*.less' {
  const resource: Record<string, string>
  export = resource
}
