import React from 'react'
import PropTypes from 'prop-types'
import './formStyles.css'
import Fieldset from './Fieldset'
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

const CommonForm = ({anfComponent: {identifier, style, ...rest}}) => {

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

CommonForm.propTypes = {
    activeComponent: PropTypes.shape({
        identifier: PropTypes.string.isRequired,
        role: PropTypes.oneOf(options.role),
        hidden: PropTypes.bool,
        anchor: PropTypes.shape({
            target: PropTypes.string,
            targetComponentIdentifier: PropTypes.string,
            rangeStart: PropTypes.number,
            rangeLength: PropTypes.number,
            originAnchorPosition: PropTypes.oneOf(options.verticalPosition),
            targetAnchorPosition: PropTypes.oneOf(options.verticalPosition),
        }),
        layout: PropTypes.shape({
            columnStart: PropTypes.number,
            columnSpan: PropTypes.number,
            minimumHeight: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]),
            maximumContentWidth: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]),
            horizontalContentAlignment: PropTypes.oneOf(options.horizontalPosition),
            ignoreDocumentGutter: PropTypes.bool,
            ignoreDocumentMargin: PropTypes.bool,
            margin: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
        }),
        style: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                backgroundColor: PropTypes.string,
                opacity: PropTypes.number,
                border: PropTypes.shape({
                    all: PropTypes.shape({
                        width: PropTypes.number,
                        color: PropTypes.string
                    }),
                    top: PropTypes.bool,
                    right: PropTypes.bool,
                    bottom: PropTypes.bool,
                    left: PropTypes.bool,
                }),
                fill: PropTypes.object,
            }),
        ]),
    }),
}

export default CommonForm
