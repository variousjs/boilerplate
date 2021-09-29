import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { ContainerProps } from '@variousjs/various'
import { Store, Config } from '../types'

class Container extends Component<ContainerProps<Store, Config>> {
  render() {
    const { Router, $component, $config } = this.props

    return (
      <Router>
        <div>!!?</div>
        {
          $config.pages.map(({ path, components }) => {
            const C = $component(components[0])

            return (
              <Route
                key={path[0]}
                exact
                path={path}
                component={C}
              />
            )
          })
        }
      </Router>
    )
  }
}

export default Container
