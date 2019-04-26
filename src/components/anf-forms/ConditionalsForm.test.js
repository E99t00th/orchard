import React from 'react'
import ReactDOM from 'react-dom'
import ConditionalsForm from './ConditionalsForm'
import {conditions, miscProps} from './ConditionalsForm.stories.js'

it('renders without crashing', () => {
  const div = document.createElement('div')

  const events = {
    onInputChange: jest.fn(),
    onClick: jest.fn(),
  }

  ReactDOM.render(<ConditionalsForm activeConditionalType='' conditions={conditions} {...miscProps} {...events} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
