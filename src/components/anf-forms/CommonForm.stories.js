import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import CommonForm from './CommonForm'

export const commonFormData = {
    identifier: '1893458237', 
    style: {fill: {type: 'none'}}
}
export const linearGradientFill = 
    {...commonFormData, 
    style: {fill: {type: 'linear_gradient', colorStops: [{color: '#FFF', location: 0},{color: '#DDD', location: 50},{color: '#FFDD00', location: 100}]}}
}
export const imageFill = 
    {...commonFormData, 
    style: {fill: {type: 'image'}}
}
export const repeatableImageFill = 
    {...commonFormData, 
    style: {fill: {type: 'repeatable_image'}}
}
export const videoFill = 
    {...commonFormData, 
    style: {fill: {type: 'video'}}
}

export const actions = {

}

storiesOf('CommonForm', module)
    .addDecorator(story => <div style={{padding: '10px', maxWidth: '380px'}}>{story()}</div>)
    .add('default', () => <CommonForm {...commonFormData} />)
    .add('linearGradient fill', () => <CommonForm {...linearGradientFill} />)
    .add('image fill', () => <CommonForm {...imageFill} />)
    .add('repeatableImage fill', () => <CommonForm {...repeatableImageFill} />)
    .add('video fill', () => <CommonForm {...videoFill} />)