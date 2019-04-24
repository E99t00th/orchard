import React from 'react'
import './formStyles.css'
import Fieldset from './Fieldset'
import Input from './Input'

const options = {
    verticalPosition: ['top', 'center', 'bottom'],
    horizontalPosition: ['left', 'center', 'right'],
    fillType: ['none', 'linear_gradient', 'image', 'repeatable_image', 'video'],
    fillMode: ['fit', 'cover'],
    fillAttachment: ['fixed', 'scroll'],
    fillRepeat: ['none', 'x', 'y', 'both']
}

const FillForm = ({fill: {type, colorStops}, ...rest}) => { 

    let basicFillInputs = [
        {name: "Type", options: options.fillType },
        {name: "Attachment", options: options.fillAttachment },
    ]

    let linearGradientInputs = [
        ...basicFillInputs
    ]

    let commonInputs = [
        ...basicFillInputs,
        {name: "Horizontal Alignment", options: options.horizontalPosition},
        {name: "Vertical Alignment", options: options.verticalPosition},
        {name: "URL"},
    ]

    let imageInputs = [
        ...commonInputs,
        {name: "Fill Mode", options: options.fillMode },
    ]

    let repeatableImageInputs = [
        ...commonInputs,
        {name: "Repeat", options: options.fillRepeat},
        {name: "Height"},
        {name: "Width"},
    ]

    let videoInputs = [
        ...imageInputs,
        {name: "Still URL"},
        {name: "Loop", checked: false},
    ]

    let inputs = {
        linear_gradient: linearGradientInputs,
        image: imageInputs,
        repeatable_image: repeatableImageInputs,
        video: videoInputs
    } 

    let mapColorStops = (x, i) => {
        return (<>
            <Input name={`Color ${i + 1}`} classes="third-width" />
            <Input name={`Location ${i + 1}`} classes="third-width" />
            <button name="deleteColorStop">Delete</button>
        </>)
    }

    let linearGradientSpecialInputs = (<>
        <Input name="Angle" classes="half-width" /><br/>
        {(colorStops) && colorStops.map(mapColorStops)}
        <button name="addColorStop" classes="half-width">Add Color Stop</button>
    </>)

    return (
        <Fieldset legend="FILL" inputs={inputs[type] || basicFillInputs}>
            {type === 'linear_gradient' && linearGradientSpecialInputs}
        </Fieldset>
    )
}

export default FillForm
