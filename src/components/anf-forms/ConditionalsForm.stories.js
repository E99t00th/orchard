import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ConditionalsForm from './ConditionalsForm'

export const conditionalsFormData = {
    identifier: '1893458237', 
    style: {fill: {type: 'none'}}
}

export const actions = {

}

storiesOf('ConditionalsForm', module)
    .addDecorator(story => <div className="CommonForm" style={{padding: '10px', maxWidth: '380px'}}>{story()}</div>)
    .add('default', () => <ConditionalsForm {...conditionalsFormData} />)
    .add('open', () => <ConditionalsForm {...conditionalsFormData} />)