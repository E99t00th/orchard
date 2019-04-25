import React from 'react'
import './formStyles.css'
import Fieldset from './Fieldset'
import Input from './Input'
import options from './selectOptions'

const FillForm = ({fill: f}) => { 

    const basicFillInputs = [
        {name: "Type", value: f.type, options: options.fillType },
        {name: "Attachment", value: f.attachment, options: options.fillAttachment },
    ]

    const linearGradientInputs = [
        ...basicFillInputs
    ]

    const commonInputs = [
        ...basicFillInputs,
        {name: "Horizontal Alignment", value: f.horizontalAlignment, options: options.horizontalPosition},
        {name: "Vertical Alignment", value: f.verticalAlignment, options: options.verticalPosition},
        {name: "URL", value: f.URL},
    ]

    const imageInputs = [
        ...commonInputs,
        {name: "Fill Mode", value: f.fillMode, options: options.fillMode },
    ]

    const repeatableImageInputs = [
        ...commonInputs,
        {name: "Repeat", value: f.repeat, options: options.fillRepeat},
        {name: "Height", value: f.height},
        {name: "Width", value: f.width},
    ]

    const videoInputs = [
        ...imageInputs,
        {name: "Still URL", value: f.stillURL},
        {name: "Loop", value: f.loop, checked: false},
    ]

    const inputs = {
        linear_gradient: linearGradientInputs,
        image: imageInputs,
        repeatable_image: repeatableImageInputs,
        video: videoInputs
    } 

    const mapColorStops = (x, i) => {
        return (<>
            <Input name={`Color ${i + 1}`} value={x.color} classes="third-width" />
            <Input name={`Location ${i + 1}`} value={x.location} classes="third-width" />
            <button name="deleteColorStop">Delete</button>
        </>)
    }

    const linearGradientSpecialInputs = (<>
        <Input name="Angle" value={f.angle} classes="half-width" /><br/>
        {(f.colorStops) && f.colorStops.map(mapColorStops)}
        <button name="addColorStop" classes="half-width">Add Color Stop</button>
    </>)

    return (
        <Fieldset legend="FILL" inputs={inputs[f.type] || basicFillInputs}>
            {f.type === 'linear_gradient' && linearGradientSpecialInputs}
        </Fieldset>
    )
}

export default FillForm
