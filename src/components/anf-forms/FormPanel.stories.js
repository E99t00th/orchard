import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import './formStyles.css'
import FormPanel from './FormPanel'
import {fieldsetObject, fieldsetObjectTwo, inputsGroupOne as fieldsetInputsGroupOne, inputsGroupTwo as fieldsetInputsGroupTwo} from './Fieldset.stories'
import options from './selectOptions';

export const actions = {
    onInputChange: action('updated input'),
}

export const inputsGroupOne = [
    fieldsetObject, 
    {
        ...fieldsetObjectTwo,
        inputs: [
            ...fieldsetInputsGroupTwo,
            {   
                identifier: '09872345757',
                legend: 'Test Fieldset 3', 
                inputs: fieldsetInputsGroupOne,
                contextProp: 'testFieldset3'
            },
        ]
    }, 
]

export const formPanelObject = {
    identifier: '09872345757',
    inputs: inputsGroupOne,
    context: {
        testFieldset: {
            minSpecVersion: 'the worst spec available',
            maxSpecVersion: 'the worst spec available', 
        },
        testFieldset2: {
            target: 'an apple on someone\'s head',
            originAnchorPosition: options.verticalPosition[1],
            testFieldset3: {
                minSpecVersion: 'very cool input',
                maxSpecVersion: 'I am so good at writing input values',
            },
        }
    },
}

export const formPanelObjectHidden = {
    ...formPanelObject,
    hide: true,
}

storiesOf('FormPanel', module)
    .addDecorator(story => <div className="ComponentEditor">{story()}</div>)
    .add('default', () => <FormPanel {...formPanelObject} {...actions} />)
    .add('hidden', () => <FormPanel {...formPanelObjectHidden} {...actions} />)