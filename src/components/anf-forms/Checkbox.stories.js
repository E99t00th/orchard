import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import './formStyles.css'
import Checkbox from './Checkbox'

export const inputObject = {
    name: "Test Checkbox", 
    checked: false, 
    classes: '',
}

export const inputObjectChecked = {
    ...inputObject,
    checked: true,
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