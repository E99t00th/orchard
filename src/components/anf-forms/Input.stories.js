import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import './formStyles.css'
import Input from './Input'

export const inputObject = {
    name: 'Test Input', 
    classes: '', 
    value: '',
}

export const inputObjectWithValue = {
    ...inputObject,
    value: 'cool text here',
}

export const inputObjectWithClasses = {
    ...inputObject,
    classes: 'half-width',
}

export const inputObjectHidden = {
    ...inputObject,
    hide: true,
}

export const actions = {
    onInputChange: action('updated input'),
}

storiesOf('Input', module)
    .addDecorator(story => <div className="ComponentEditor">{story()}</div>)
    .add('default', () => <Input {...inputObject} {...actions} />)
    .add('with value', () => <Input {...inputObjectWithValue} {...actions} />)
    .add('with classes', () => <Input {...inputObjectWithClasses} {...actions} />)
    .add('hidden', () => <Input {...inputObjectHidden} {...actions} />)