import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ConditionalsForm from './ConditionalsForm'
import options from './selectOptions'

export const conditions = {
    viewLocation: options.viewLocation[1],
    subscriptionStatus: options.subscriptionStatus[1],
    horizontalSizeClass: options.sizeClass[1],
    verticalSizeClass: options.sizeClass[1],
    minContentSizeCategory: options.contSize[1],
    maxContentSizeCategory: options.contSize[1],
    minSpecVersion: 'sample spec min',
    maxSpecVersion: 'sample spec max',
    minColumns: 1,
    maxColumns: 3,
    minViewportAspectRatio: 0.75,
    maxViewportAspectRatio: 1.78,
    minViewportWidth: 375,
    maxViewportWidth: 812,
    platform: options.platform[1],
}

export const miscProps = {
    identifier: '38594795833',
    name: 'component'
}

export const actions = {
    onInputChange: action('updated input'),
    onClick: action('click handled'),
}

storiesOf('ConditionalsForm', module)
    .addDecorator(story => <div className="CommonForm" style={{padding: '10px', maxWidth: '380px'}}>{story()}</div>)
    .add('default', () => <ConditionalsForm conditions={conditions} activeConditionalType='' {...actions} {...miscProps} />)
    .add('this conditional open', () => <ConditionalsForm conditions={conditions} activeConditionalType='component' {...actions} {...miscProps} />)
    .add('another conditional open', () => <ConditionalsForm conditions={conditions} activeConditionalType='style' {...actions} {...miscProps} />)