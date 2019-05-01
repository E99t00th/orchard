import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import '../formStyles.css'
import LayoutFieldset from './LayoutFieldset'
import data from '../../../dummydata'

export const actions = {
    onInputChange: action('updated input'),
    onConditionalBtnClick: action('opened this conditional')
}

export const layoutFieldsetObject = {
    identifier: '09872345757',
    legend: 'Layout',
    context: data.common[0].layout,
    keyId: 100,
    hide: false,
    conditionalOpen: false
}

export const layoutFieldsetObjectHidden = {
    ...layoutFieldsetObject,
    hide: true,
}

storiesOf('fieldsets/LayoutFieldset', module)
    .addDecorator(story => <div className="ComponentEditor">{story()}</div>)
    .add('default', () => <LayoutFieldset {...layoutFieldsetObject} {...actions} />)
    .add('hidden', () => <LayoutFieldset {...layoutFieldsetObjectHidden} {...actions} />)