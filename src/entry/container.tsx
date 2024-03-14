import React, { Component, memo } from 'react'
import { createComponent, getConfig } from '@variousjs/various'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
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
          <Routes>
          {
            $config.pages.map(({ path, components }) => {
              const CS = components.map((name) => {
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
