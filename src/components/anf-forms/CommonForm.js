import React from 'react'
import './formStyles.css'
import Fieldset from './Fieldset'
import Input from './Input'
import Checkbox from './Checkbox'
import Select from './Select'
import FillForm from './FillForm'

const options = {
    role: [ 'title', 'intro', 'caption', 'body', 'author', 'byline', 
            'illustrator', 'photographer', 'quote', 'pullquote', 'heading', 'heading1', 
            'heading2', 'heading3', 'heading4', 'heading5', 'heading6', 'arkit', 'image', 
            'photo', 'figure', 'portrait', 'logo', 'gallery', 'mosaic', 'audio', 'music', 
            'embedwebvideo', 'video', 'place', 'map', 'instagram', 'facebook_post', 'tweet', 
            'datatable', 'htmltable', 'medium_rectangle_advertisement', 'banner_advertisement', 
            'header', 'container', 'aside', 'section', 'chapter', 'divider' ],
    verticalPosition: ['top', 'center', 'bottom'],
    horizontalPosition: ['left', 'center', 'right'],
    targetComponentIdentifier: ['none'],
}

const CommonForm = ({identifier, style, ...rest}) => {

    const anchorInputs = [
        {name: "Target"},
        {name: "Target Component Identifier", options: options.targetComponentIdentifier },
        {name: "Range Start" },
        {name: "Range Length" },
        {name: "Origin Anchor Position", options: options.verticalPosition },
        {name: "Target Anchor Position", options: options.verticalPosition },
    ]

    const layoutInputs = [
        {name: "Column Start" },
        {name: "Column Span" },
        {name: "Minimum Height" },
        {name: "Maximum Content Width" },
        {name: "Horizontal Content Alignment", options: options.horizontalPosition },
        {name: "Ignore Document Gutter", checked: false},
        {name: "Ignore Document Margin", checked: false},
    ]

    const marginInputs = [
        {name: "Top", classes: "quarter-width" },
        {name: "Right", classes: "quarter-width" },
        {name: "Bottom", classes: "quarter-width" },
        {name: "Left", classes: "quarter-width" },
    ]

    const styleInputs = [
        {name: "Background Color" },
        {name: "Opacity" },
    ]

    const borderInputs = [
        {name: "Width" },
        {name: "Color" },
        {name: "Top", classes: "quarter-width", checked: false},
        {name: "Right", classes: "quarter-width", checked: false},
        {name: "Bottom", classes: "quarter-width", checked: false},
        {name: "Left", classes: "quarter-width", checked: false},
    ]

    return (
        <div className="CommonForm">
            <p>Identifier: {identifier}</p>
            <Select name="role" classes="half-width" options={options.role} />
            <Checkbox name="Hidden" classes="quarter-width" checked={false} />
            <Fieldset legend="ANCHOR" inputs={anchorInputs} />
            <Fieldset legend="LAYOUT" inputs={layoutInputs}>
                <Fieldset legend="MARGIN" inputs={marginInputs} />
            </Fieldset>
            <Fieldset legend="STYLE" inputs={styleInputs}>
                <Fieldset legend="BORDER" inputs={borderInputs} />
                <FillForm fill={style.fill} />
            </Fieldset>
        </div>
    )
}

export default CommonForm
