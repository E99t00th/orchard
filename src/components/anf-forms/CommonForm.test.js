import React from 'react'
import ReactDOM from 'react-dom'
import CommonForm from './CommonForm'
import {anfComponent} from './CommonForm.stories'

it('renders without crashing', () => {
  const div = document.createElement('div')

  const events = {
    onInputChange: jest.fn()
  }

  ReactDOM.render(<CommonForm anfComponent={anfComponent} {...events} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
