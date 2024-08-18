import React, { Component, memo } from 'react'
import { createComponent, getConfig } from '@variousjs/various'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Config, Store } from '../../types'
import csses from './container.less'

const Header = createComponent({ name: 'top', module: 'H' })
const Name = createComponent<Store>({ name: 'top', module: 'S' }, ['user'])

class Container extends Component {
  config = getConfig() as Config

  components = this.config.pages.reduce((prev, current) => {
    current.components.forEach((item) => {
      prev[item] = memo(createComponent({ name: item }))
    })
    return prev
  }, {} as Record<string, ReturnType<typeof createComponent>>)

  render() {
    const $config = this.config

    return (
      <div className={csses.container}>
        <Router>
          <div className={csses.top}>
            <Header />
            <Name />
          </div>
          <Routes>
          {
            $config.pages.map(({ path, components }) => {
              const CS = components.map((name) => {
                const C = this.components[name]
                return (<div className={csses.com} key={name}>
                  <C />
                </div>)
              })

              return (
                <Route
                  key={path}
                  path={path}
                  element={CS}
                />
              )
            })
          }
          </Routes>
        </Router>
      </div>
    )
  }
}

export default Container
