import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import './formStyles.css'
import Checkbox from './Checkbox'

export const inputObject = {
    name: "Test Checkbox", 
    checkbox: true,
    classes: '',
    value: 'testCheckbox',
    context: {
        testCheckbox: false
    }
}

export const inputObjectChecked = {
    ...inputObject,
    context: {
        testCheckbox: true
    },
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
    onInputChange: action('updated input'),
}

storiesOf('Checkbox', module)
    .addDecorator(story => <div className="ComponentEditor">{story()}</div>)
    .add('default', () => <Checkbox {...inputObject} {...actions} />)
    .add('checked', () => <Checkbox {...inputObjectChecked} {...actions} />)
    .add('with classes', () => <Checkbox {...inputObjectWithClasses} {...actions} />)
    .add('hidden', () => <Checkbox {...inputObjectHidden} {...actions} />)