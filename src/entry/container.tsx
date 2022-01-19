import React, { Component, ComponentType } from 'react'
import { ContainerProps } from '@variousjs/various'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Config } from '../types'
import csses from './entry.less'

class Container extends Component<ContainerProps<Config>> {
  render() {
    const { $component, $config } = this.props
    const Top = $component('top')

    return (
      <div className={csses.container}>
        <Router>
          <div className={csses.top}>
            <Top />
          </div>
          {
            $config.pages.map(({ path, components }) => {
              const cs = () => components.map((name) => {
                const C = $component(name)
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
