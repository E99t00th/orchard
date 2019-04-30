import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import './formStyles.css'
import Fieldset from './Fieldset'
import options from './selectOptions'
import {inputObject, inputObjectWithValue} from './Input.stories'
import {inputObject as selectObject, inputObjectNewValue} from './Select.stories'
import {inputObject as checkboxObject, inputObjectChecked} from './Checkbox.stories'

export const actions = {
    onInputChange: action('updated input'),
}

export const inputsGroupOne = [
    {name: 'View Location', value: 'viewLocation', options: 'viewLocation'},
    {name: 'Subscription Status', value: 'subscriptionStatus', options: 'subscriptionStatus'},
    {name: 'Horizontal Size Class', value: 'horizontalSizeClass', options: 'sizeClass'},
    {name: 'Vertical Size Class', value: 'verticalSizeClass', options: 'sizeClass'},
    {name: 'Min Content Size Category', value: 'minContentSizeCategory', options: 'contSize'},
    {name: 'Max Content Size Category', value: 'maxContentSizeCategory', options: 'contSize'},
    {name: 'Min Spec Version', value: 'minSpecVersion'},
    {name: 'Max Spec Version', value: 'maxSpecVersion'},
    {name: 'Min Columns', value: 'minColumns'},
    {name: 'Max Columns', value: 'maxColumns'},
    {name: 'Min Viewport Aspect Ratio', value: 'minViewportAspectRatio'},
    {name: 'Max Viewport Aspect Ratio', value: 'maxViewportAspectRatio'},
    {name: 'Min Viewport Width', value: 'minViewportWidth'},
    {name: 'Max Viewport Width', value: 'maxViewportWidth'},
    {name: 'Platform', value: 'platform', options: 'platform'},
]

export const inputsGroupTwo = [
    {name: 'Target', value: 'target',},
    {name: 'Target Component Identifier', value: 'targetComponentIdentifier', options: 'targetComponentIdentifier' },
    {name: 'Range Start', value: 'rangeStart', },
    {name: 'Range Length', value: 'rangeLength', },
    {name: 'Origin Anchor Position', value: 'originAnchorPosition', options: 'verticalPosition' },
    {name: 'Target Anchor Position', value: 'targetAnchorPosition', options: 'verticalPosition' },
]

export const fieldsetObject = {
    identifier: '09872345757',
    legend: 'Test Fieldset', 
    inputs: inputsGroupOne,
    context: {
        minSpecVersion: 'the worst spec available',
        maxSpecVersion: 'the worst spec available',
    },
    contextProp: 'testFieldset'
}

export const fieldsetObjectTwo = {
    identifier: '09872345757',
    legend: 'Test Fieldset 2', 
    inputs: [
        ...inputsGroupTwo,
        {   
            identifier: '09872345757',
            legend: 'Test Fieldset', 
            inputs: inputsGroupOne,
            contextProp: 'testFieldset'
        }
    ],
    context: {
        target: 'an apple on someone\'s head',
        originAnchorPosition: options.verticalPosition[1],
        testFieldset: {
            minSpecVersion: 'the worst spec available',
            maxSpecVersion: 'the worst spec available',
        },
    },
    contextProp: 'testFieldset2'
}

export const fieldsetObjectHidden = {
    ...fieldsetObject,
    hide: true,
}

storiesOf('Fieldset', module)
    .addDecorator(story => <div className="ComponentEditor">{story()}</div>)
    .add('default', () => <Fieldset {...fieldsetObject} {...actions} />)
    .add('with nested fieldset', () => <Fieldset {...fieldsetObjectTwo} {...actions} />)
    .add('hidden', () => <Fieldset {...fieldsetObjectHidden} {...actions} />)