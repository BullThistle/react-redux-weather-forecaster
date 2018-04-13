import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class HeaderMenu extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item header>Weather Forcaster</Menu.Item>
      </Menu>
    )
  }
}
