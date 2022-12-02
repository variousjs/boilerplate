import React, { Component, ComponentType, memo } from 'react'
import { createComponent, getConfig } from '@variousjs/various'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Config } from '../types'
import csses from './entry.less'

class Container extends Component {
  config = getConfig() as Config

  top = memo(createComponent('top'))

  components = this.config.pages.reduce((prev, current) => {
    current.components.forEach((item) => {
      prev[item] = memo(createComponent(item))
    })
    return prev
  }, {} as Record<string, ReturnType<typeof createComponent>>)

  render() {
    const Top = this.top
    const $config = this.config

    return (
      <div className={csses.container}>
        <Router>
          <div className={csses.top}>
            <Top />
          </div>
          {
            $config.pages.map(({ path, components }) => {
              const cs = () => components.map((name) => {
                const C = this.components[name]
                return (
                  <div
                    key={name}
                    style={{ display: 'inline-block', width: 300, verticalAlign: 'top' }}
                  >
                    <C />
                  </div>
                )
              })

              return (
                <Route
                  key={Array.isArray(path) ? path.join() : path}
                  exact
                  path={path}
                  component={cs as unknown as ComponentType}
                />
              )
            })
          }
        </Router>
      </div>
    )
  }
}

export default Container
