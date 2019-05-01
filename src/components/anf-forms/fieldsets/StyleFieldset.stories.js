import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import '../formStyles.css'
import StyleFieldset from './StyleFieldset'
import data from '../../../dummydata'

export const actions = {
    onInputChange: action('updated input'),
    onConditionalBtnClick: action('opened this conditional')
}

export const styleFieldsetObject = {
    identifier: '09872345757',
    legend: 'Layout',
    context: data.common[0].style,
    keyId: 100,
    hide: false,
    conditionalOpen: false
}

export const styleFieldsetObjectImageFill = {
    ...styleFieldsetObject,
    context: {
        ...styleFieldsetObject.context,
        fill: {
            type: 'image'
        }
    }
}

export const styleFieldsetObjectVideoFill = {
    ...styleFieldsetObject,
    context: {
        ...styleFieldsetObject.context,
        fill: {
            type: 'video'
        }
    }
}

export const styleFieldsetObjectRepeatableImageFill = {
    ...styleFieldsetObject,
    context: {
        ...styleFieldsetObject.context,
        fill: {
            type: 'repeatable_image'
        }
    }
}

export const styleFieldsetObjectLinearGradientFill = {
    ...styleFieldsetObject,
    context: {
        ...styleFieldsetObject.context,
        fill: {
            type: 'linear_gradient'
        }
    }
}

export const styleFieldsetObjectOpenConditional = {
    ...styleFieldsetObject,
    conditionalOpen: true
}

export const styleFieldsetObjectHidden = {
    ...styleFieldsetObject,
    hide: true,
}

storiesOf('fieldsets/StyleFieldset', module)
    .addDecorator(story => <div className="ComponentEditor">{story()}</div>)
    .add('default', () => <StyleFieldset {...styleFieldsetObject} {...actions} />)
    .add('image fill', () => <StyleFieldset {...styleFieldsetObjectImageFill} {...actions} />)
    .add('video fill', () => <StyleFieldset {...styleFieldsetObjectVideoFill} {...actions} />)
    .add('repeatable image fill', () => <StyleFieldset {...styleFieldsetObjectRepeatableImageFill} {...actions} />)
    .add('linear gradient fill', () => <StyleFieldset {...styleFieldsetObjectLinearGradientFill} {...actions} />)
    .add('conditional open', () => <StyleFieldset {...styleFieldsetObjectOpenConditional} {...actions} />)
    .add('hidden', () => <StyleFieldset {...styleFieldsetObjectHidden} {...actions} />)