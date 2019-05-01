import React from 'react'
import ReactDOM from 'react-dom'
import ConditionalFieldset from './ConditionalFieldset'
import {conditionalFieldsetObject} from './ConditionalFieldset.stories'

it('renders without crashing', () => {
  const div = document.createElement('div')

  const events = {
    onInputChange: jest.fn()
  }

  ReactDOM.render(<ConditionalFieldset {...conditionalFieldsetObject} {...events} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
