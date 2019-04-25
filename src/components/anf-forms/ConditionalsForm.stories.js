import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ConditionalsForm from './ConditionalsForm'
import options from './selectOptions'

export const conditions = {
    viewLocation: options.viewLocation[0],
    subscriptionStatus: options.subscriptionStatus[0],
    horizontalSizeClass: options.sizeClass[0],
    verticalSizeClass: options.sizeClass[0],
    minContentSizeCategory: options.contSize[0],
    maxContentSizeCategory: options.contSize[0],
    minSpecVersion: 'sample spec min',
    maxSpecVersion: 'sample spec max',
    minColumns: 1,
    maxColumns: 3,
    minViewportAspectRatio: 0.75,
    maxViewportAspectRatio: 1.78,
    minViewportWidth: 375,
    maxViewportWidth: 812,
    platform: options.platform[0],
}

export const actions = {
    onInputChange: action('updated input')
}

storiesOf('ConditionalsForm', module)
    .addDecorator(story => <div className="CommonForm" style={{padding: '10px', maxWidth: '380px'}}>{story()}</div>)
    .add('default', () => <ConditionalsForm conditions={conditions} {...actions} />)
    .add('open', () => <ConditionalsForm conditions={conditions} {...actions} />)