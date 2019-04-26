import React from 'react'
import ReactDOM from 'react-dom'
import Checkbox from './Checkbox'
import {inputObject} from './Checkbox.stories'

it('renders without crashing', () => {
  const div = document.createElement('div')

  const events = {
    onInputChange: jest.fn()
  }

  ReactDOM.render(<Checkbox {...inputObject} {...events} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
