import React from 'react'
import ReactDOM from 'react-dom'
import FormPanel from './FormPanel'
import {formPanelObject} from './FormPanel.stories'

it('renders without crashing', () => {
  const div = document.createElement('div')

  const events = {
    onInputChange: jest.fn()
  }

  ReactDOM.render(<FormPanel {...formPanelObject} {...events} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
