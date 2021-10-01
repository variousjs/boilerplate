import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { ContainerProps } from '@variousjs/various'
import { Radio } from 'antd'
import { Store, Config } from '../types'
import csses from './entry.less'

class Container extends Component<ContainerProps<Store, Config>> {
  state = {
    path: '/'
  }

  onRouterChange = (e: any) => {
    this.props.$router.history.push(e.target.value)
    this.setState({ path: e.target.value })
  }

  componentDidMount() {
    this.setState({ path: this.props.$router.location.pathname })
  }

  render() {
    const { Router, $component, $config } = this.props

    return (
      <div className={csses.container}>
        <Radio.Group
          size="large"
          value={this.state.path}
          onChange={this.onRouterChange}
          buttonStyle="solid"
        >
          {
            $config.links.map(({ path, name }) => (
              <Radio.Button key={path} value={path}>
                {name}
              </Radio.Button>
            ))
          }
        </Radio.Group>

        <Router>
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
      </div>
    )
  }
}

export default Container
