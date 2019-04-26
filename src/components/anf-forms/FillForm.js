import React from 'react'
import './formStyles.css'
import Fieldset from './Fieldset'
import Input from './Input'
import options from './selectOptions'

const FillForm = ({fill: f, onInputChange}) => { 

    const basicFillInputs = [
        {name: "Type", onInputChange, value: f.type, options: options.fillType },
        {name: "Attachment", onInputChange, value: f.attachment, options: options.fillAttachment },
    ]

    const linearGradientInputs = [
        ...basicFillInputs
    ]

    const commonInputs = [
        ...basicFillInputs,
        {name: "Horizontal Alignment", onInputChange, value: f.horizontalAlignment, options: options.horizontalPosition},
        {name: "Vertical Alignment", onInputChange, value: f.verticalAlignment, options: options.verticalPosition},
        {name: "URL", onInputChange, value: f.URL},
    ]

    const imageInputs = [
        ...commonInputs,
        {name: "Fill Mode", onInputChange, value: f.fillMode, options: options.fillMode },
    ]

    const repeatableImageInputs = [
        ...commonInputs,
        {name: "Repeat", onInputChange, value: f.repeat, options: options.fillRepeat},
        {name: "Height", onInputChange, value: f.height},
        {name: "Width", onInputChange, value: f.width},
    ]

    const videoInputs = [
        ...imageInputs,
        {name: "Still URL", onInputChange, value: f.stillURL},
        {name: "Loop", onInputChange, value: f.loop, checked: false},
    ]

    const inputs = {
        linear_gradient: linearGradientInputs,
        image: imageInputs,
        repeatable_image: repeatableImageInputs,
        video: videoInputs
    } 

    const mapColorStops = (x, i) => {
        return (<React.Fragment key={'colorstop' + i}>
            <Input name={`Color ${i + 1}`} onInputChange={onInputChange} value={x.color} classes="third-width" />
            <Input name={`Location ${i + 1}`} onInputChange={onInputChange} value={x.location} classes="third-width" />
            <button name="deleteColorStop">Delete</button>
        </React.Fragment>)
    }

    const linearGradientSpecialInputs = (<>
        <Input name="Angle" onInputChange={onInputChange} value={f.angle} classes="half-width" /><br/>
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
