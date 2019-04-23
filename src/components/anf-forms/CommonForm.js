import React from 'react'
import './formStyles.css'
import Fieldset from './Fieldset'
import Input from './Input'
import Checkbox from './Checkbox'
import Select from './Select'

const roleOptions = [ 'title', 'intro', 'caption', 'body', 'author', 'byline', 
'illustrator', 'photographer', 'quote', 'pullquote', 'heading', 'heading1', 
'heading2', 'heading3', 'heading4', 'heading5', 'heading6', 'arkit', 'image', 
'photo', 'figure', 'portrait', 'logo', 'gallery', 'mosaic', 'audio', 'music', 
'embedwebvideo', 'video', 'place', 'map', 'instagram', 'facebook_post', 'tweet', 
'datatable', 'htmltable', 'medium_rectangle_advertisement', 'banner_advertisement', 
'header', 'container', 'aside', 'section', 'chapter', 'divider' ]

const verticalPositionOptions = ['top', 'center', 'bottom']

const horizontalPositionOptions = ['left', 'center', 'right']

const targetComponentIdentifierOptions = ['none']

const fillTypeOptions = ['none', 'linear_gradient', 'image', 'repeatable_image', 'video']

const fillModeOptions = ['fit', 'cover']

const fillAttachmentOptions = ['fixed', 'scroll']

const fillRepeatOptions = ['none', 'x', 'y', 'both']

const FillForm = ({fill: {type, colorStops}}) => { 

    let commonInputs = (<>
        <Input name="URL" classes="half-width" value={'placeholder'} />
        <Select name="Horizontal Alignment" classes="half-width" options={horizontalPositionOptions} />
        <Select name="Vertical Alignment" classes="half-width" options={verticalPositionOptions} />
    </>)

    let image = (<>
        <Select name="Fill Mode" classes="half-width" options={fillModeOptions} />
        {commonInputs}
    </>)

    let linear_gradient = (<>
        {/* UGH MORE OBJECTS - COLOR STOPS */}
        <Input name="Angle" classes="half-width" value={'placeholder'} /><br/>
        {(colorStops) && colorStops.map((x, i) => {
            return (<>
                <Input name={`Color ${i + 1}`} classes="third-width" value={x.color} />
                <Input name={`Location ${i + 1}`} classes="third-width" value={x.location} />
                <button name="deleteColorStop">Delete</button>
            </>)
        })}
        <button name="addColorStop" classes="half-width">Add Color Stop</button>
    </>)

    let repeatable_image = (<>
        <>
            <Input name="Height" classes="half-width" value={'placeholder'} />
            <Input name="Width" classes="half-width" value={'placeholder'} />
            <Select name="Repeat" classes="half-width" options={fillRepeatOptions} />
        </>
        {commonInputs}
    </>)

    let video = (<>
        <Input name="Still URL" classes="half-width" value={'placeholder'} />
        <Checkbox name="Loop" classes="half-width" checked={false} />
        {image}
    </>)

    let inputs = {
        linear_gradient,
        image,
        repeatable_image,
        video
    } 

    return (
        <Fieldset legend="FILL">
            {/* MOVE ALL FILL FIELDSET INTO SEPARATE COMPONENT, INCLUDE HERE */}
            <Select name="Type" classes="half-width" options={fillTypeOptions} />
            <Select name="Attachment" classes="half-width" options={fillAttachmentOptions} />
            {inputs[type]}
        </Fieldset>
    )

}

const CommonForm = ({identifier, style}) => {
    return (
        <div className="CommonForm">
            <p>Identifier: {identifier}</p>
            <Select name="role" classes="half-width" options={roleOptions} />
            <Checkbox name="Hidden" classes="quarter-width" checked={false} />
            <Fieldset legend="ANCHOR">
                {/* some props might be conditional on anchor target/method */}
                <Input name="Target" classes="half-width" value={'placeholder'} />{/* sibling component identifiers, default none */}
                <Select name="Target Component Identifier" classes="half-width" options={targetComponentIdentifierOptions} /><br/>
                <Input name="Range Start" classes="half-width" value={'placeholder'} />
                <Input name="Range Length" classes="half-width" value={'placeholder'} />
                <Select name="Origin Anchor Position" classes="half-width" options={verticalPositionOptions} />
                <Select name="Target Anchor Position" classes="half-width" options={verticalPositionOptions} />
            </Fieldset>
            <Fieldset legend="LAYOUT">
                {/* some props might be conditional on anchor target/method */}
                <Input name="Column Start" classes="half-width" value={'placeholder'} />
                <Input name="Column Span" classes="half-width" value={'placeholder'} />
                <Input name="Minimum Height" classes="half-width" value={'placeholder'} />
                <Input name="Maximum Content Width" classes="half-width" value={'placeholder'} />
                <Select name="Horizontal Content Alignment" classes="half-width" options={horizontalPositionOptions} /><br/>
                <Checkbox name="Ignore Document Gutter" classes="half-width" checked={false} />
                <Checkbox name="Ignore Document Margin" classes="half-width" checked={false} />
                <Fieldset legend="MARGIN">
                    <Input name="Top" classes="quarter-width" value={'placeholder'} />
                    <Input name="Right" classes="quarter-width" value={'placeholder'} />
                    <Input name="Bottom" classes="quarter-width" value={'placeholder'} />
                    <Input name="Left" classes="quarter-width" value={'placeholder'} />
                </Fieldset>
            </Fieldset>
            <Fieldset legend="STYLE">
                {/* some props might be conditional on anchor target/method */}
                <Input name="Background Color" classes="half-width" value={'placeholder'} />
                <Input name="Opacity" classes="half-width" value={'placeholder'} />
                <Fieldset legend="BORDER">
                    <Input name="Width" classes="half-width" value={'placeholder'} />
                    <Input name="Color" classes="half-width" value={'placeholder'} /><br/>
                    <Checkbox name="Top" classes="quarter-width" checked={false} />
                    <Checkbox name="Right" classes="quarter-width" checked={false} />
                    <Checkbox name="Bottom" classes="quarter-width" checked={false} />
                    <Checkbox name="Left" classes="quarter-width" checked={false} />
                </Fieldset>
                <FillForm fill={style.fill} />
            </Fieldset>
        </div>
    )
}

export default CommonForm
