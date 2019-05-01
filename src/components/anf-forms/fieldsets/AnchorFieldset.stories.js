import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import '../formStyles.css'
import AnchorFieldset from './AnchorFieldset'
import data from '../../../dummydata'

export const actions = {
    onInputChange: action('updated input'),
}

export const anchorFieldsetObject = {
    identifier: '09872345757',
    legend: 'Anchor',
    context: data.common[0].anchor,
    keyId: 100,
    hide: false,
}

export const anchorFieldsetObjectHidden = {
    ...anchorFieldsetObject,
    hide: true,
}

storiesOf('AnchorFieldset', module)
    .addDecorator(story => <div className="ComponentEditor">{story()}</div>)
    .add('default', () => <AnchorFieldset {...anchorFieldsetObject} {...actions} />)
    .add('hidden', () => <AnchorFieldset {...anchorFieldsetObjectHidden} {...actions} />)