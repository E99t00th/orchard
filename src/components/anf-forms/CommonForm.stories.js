import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import data from '../../dummydata'

import CommonForm from './CommonForm'

export const anfComponent = {
    ...data.common[0]
}
export const linearGradientFill = {
    ...anfComponent,
    style: {
        ...anfComponent.style,
        fill: {type: 'linear_gradient', colorStops: [
        {color: '#FFF', location: 0},
        {color: '#DDD', location: 50},
        {color: '#FFDD00', location: 100}
    ]}}
}
export const imageFill = {
    ...anfComponent,
    style: {
        ...anfComponent.style,
        fill: {type: 'image'}}        
}
export const repeatableImageFill = {
    ...anfComponent,
    style: {
        ...anfComponent.style,
        fill: {type: 'repeatable_image'}}
}
export const videoFill = {
    ...anfComponent,
    style: {
        ...anfComponent.style,
        fill: {type: 'video'}}
}

export const actions = {
    onInputChange: action('onChange triggered')
}

storiesOf('CommonForm', module)
    .addDecorator(story => <div style={{padding: '10px', maxWidth: '380px'}}>{story()}</div>)
    .add('default', () => <CommonForm activeConditionalType='' anfComponent={anfComponent} {...actions} />)
    .add('open component conditional', () => <CommonForm activeConditionalType='component' anfComponent={anfComponent} {...actions} />)
    .add('linearGradient fill', () => <CommonForm activeConditionalType='' anfComponent={linearGradientFill} {...actions} />)
    .add('image fill', () => <CommonForm activeConditionalType='' anfComponent={imageFill} {...actions} />)
    .add('repeatableImage fill', () => <CommonForm activeConditionalType='' anfComponent={repeatableImageFill} {...actions} />)
    .add('video fill', () => <CommonForm activeConditionalType='' anfComponent={videoFill} {...actions} />)