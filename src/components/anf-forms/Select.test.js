import React from 'react'
import ReactDOM from 'react-dom'
import Select from './Select'
import {inputObject} from './Select.stories'

it('renders without crashing', () => {
  const div = document.createElement('div')

  const events = {
    onInputChange: jest.fn()
  }

  ReactDOM.render(<Select {...inputObject} {...events} />, div)
  ReactDOM.unmountComponentAtNode(div)
})