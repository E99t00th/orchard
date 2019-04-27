import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import './formStyles.css'
import Fieldset from './Fieldset'
import {inputObject, inputObjectWithValue} from './Input.stories'
import {inputObject as selectObject, inputObjectNewValue} from './Select.stories'
import {inputObject as checkboxObject, inputObjectChecked} from './Checkbox.stories'

export const actions = {
    onInputChange: action('updated input'),
}

export const inputsGroupOne = [
    {...inputObject, onInputChange: actions.onInputChange},
    {...selectObject, onInputChange: actions.onInputChange},
    {...checkboxObject, onInputChange: actions.onInputChange},
]

export const inputsGroupTwo = [
    {...inputObjectNewValue, onInputChange: actions.onInputChange},
    {...inputObjectChecked, onInputChange: actions.onInputChange},
    {...inputObjectWithValue, onInputChange: actions.onInputChange},
]

export const fieldsetObject = {
    identifier: '09872345757',
    legend: 'Test Fieldset', 
    inputs: inputsGroupOne,
}

export const fieldsetObjectTwo = {
    identifier: '09872345757',
    legend: 'Test Fieldset 2', 
    inputs: inputsGroupTwo,
}

export const fieldsetWithChildren = {
    ...fieldsetObject,
    children: [
        <Fieldset {...fieldsetObjectTwo} {...actions} />
    ]
}

export const fieldsetObjectHidden = {
    ...fieldsetObject,
    hide: true,
}

storiesOf('Fieldset', module)
    .addDecorator(story => <div className="ComponentEditor">{story()}</div>)
    .add('default', () => <Fieldset {...fieldsetObject} {...actions} />)
    .add('with children', () => <Fieldset {...fieldsetWithChildren} {...actions} />)
    .add('hidden', () => <Fieldset {...fieldsetObjectHidden} {...actions} />)