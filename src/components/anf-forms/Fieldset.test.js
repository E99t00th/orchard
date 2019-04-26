import React from 'react'
import ReactDOM from 'react-dom'
import Fieldset from './Fieldset'
import {fieldsetObject} from './Fieldset.stories'

it('renders without crashing', () => {
  const div = document.createElement('div')

  const events = {
    onInputChange: jest.fn()
  }

  ReactDOM.render(<Fieldset {...fieldsetObject} {...events} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
