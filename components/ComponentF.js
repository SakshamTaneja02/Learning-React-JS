import React, { Component } from 'react'
import ComponentE from './ComponentE'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {
            (value) => {
                return <div>Hello {value}</div>
            }
        }
      </UserConsumer>
    )
  }
}

export default ComponentF
