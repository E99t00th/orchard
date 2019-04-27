import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import './formStyles.css'
import FormPanel from './FormPanel'
import {fieldsetObject, fieldsetObjectTwo, fieldsetWithNestedFieldset} from './Fieldset.stories'

export const actions = {
    onInputChange: action('updated input'),
}

export const inputsGroupOne = [
    fieldsetObject, 
    fieldsetObjectTwo, 
    fieldsetWithNestedFieldset,
]

export const formPanelObject = {
    inputs: inputsGroupOne
}

export const formPanelObjectHidden = {
    ...formPanelObject,
    hide: true,
}

storiesOf('FormPanel', module)
    .addDecorator(story => <div className="ComponentEditor">{story()}</div>)
    .add('default', () => <FormPanel {...formPanelObject} {...actions} />)
    .add('hidden', () => <FormPanel {...formPanelObjectHidden} {...actions} />)