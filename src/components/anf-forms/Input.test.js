import React from 'react'
import ReactDOM from 'react-dom'
import Input from './Input'
import {inputObject} from './Input.stories'

it('renders without crashing', () => {
  const div = document.createElement('div')

  const events = {
    onInputChange: jest.fn()
  }

  ReactDOM.render(<Input {...inputObject} {...events} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
