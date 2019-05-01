import React from 'react'
import ReactDOM from 'react-dom'
import AnchorFieldset from './AnchorFieldset'
import {anchorFieldsetObject} from './AnchorFieldset.stories'

it('renders without crashing', () => {
  const div = document.createElement('div')

  const events = {
    onInputChange: jest.fn()
  }

  ReactDOM.render(<AnchorFieldset {...anchorFieldsetObject} {...events} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
