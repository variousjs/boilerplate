import React, { Component, ComponentType } from 'react'
import { Route } from 'react-router-dom'
import { ContainerProps } from '@variousjs/various'
import { Radio, Badge, Button } from 'antd'
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
    const { Router, $component, $config, $store } = this.props

    return (
      <div className={csses.container}>
        <div className={csses.top}>
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

          <div>
            Store:
            <Badge
              style={{ marginLeft: 10 }}
              count={$store.user.name}
            />
            <Button
              style={{ marginLeft: 10 }}
              onClick={() => this.props.$dispatch('card', 'getName', 'Card')}
            >
              Card Name
            </Button>
          </div>
        </div>

        <Router>
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
