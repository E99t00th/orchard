import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import '../formStyles.css'
import ConditionalFieldset from './ConditionalFieldset'
import data from '../../../dummydata'

export const actions = {
    onInputChange: action('updated input'),
    onConditionalCloseClick: action('exited conditional mode'),
}

export const conditionalFieldsetObjectHidden = {
    identifier: '09872345757',
    legend: 'Conditions',
    context: data.common[0].conditional[0].conditions[0],
    hide: true,
    keyId: 100,
}

export const conditionalFieldsetObject = {
    ...conditionalFieldsetObjectHidden,
    hide: false,
}

storiesOf('fieldsets/ConditionalFieldset', module)
    .addDecorator(story => <div className="ComponentEditor">{story()}</div>)
    .add('default', () => <ConditionalFieldset {...conditionalFieldsetObject} {...actions} />)
    .add('hidden', () => <ConditionalFieldset {...conditionalFieldsetObjectHidden} {...actions} />)