// 这里直接配置 antd 依赖库，因为 antd 是 amd 依赖进来并不参与打包
declare module 'antd' {
  import { ComponentType } from 'react'

  export const Spin: ComponentType<any>
}

declare module '*.less' {
  const resource: Record<string, string>
  export = resource
}
