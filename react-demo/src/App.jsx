import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
        <Outlet></Outlet>
      </div>
    )
  }
}
