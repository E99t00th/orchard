import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import './formStyles.css'
import Select from './Select'
import options from './selectOptions'

export const inputObject = {
    name: 'Test Select', 
    classes: '', 
    value: 'testSelect',
    context: {testSelect: options.role[0]},
    options: 'role',
}

export const inputObjectNewValue = {
    ...inputObject,
    context: {testSelect: options.role[1]},
}

export const inputObjectWithClasses = {
    ...inputObject,
    classes: 'red',
}

export const inputObjectHidden = {
    ...inputObject,
    hide: true,
}

export const actions = {
    onInputChange: action('updated select'),
}

storiesOf('Basic Form Components/Select', module)
    .addDecorator(story => <div className="ComponentEditor">{story()}</div>)
    .add('default', () => <Select {...inputObject} {...actions} />)
    .add('with new value', () => <Select {...inputObjectNewValue} {...actions} />)
    .add('with classes', () => <Select {...inputObjectWithClasses} {...actions} />)
    .add('hidden', () => <Select {...inputObjectHidden} {...actions} />)