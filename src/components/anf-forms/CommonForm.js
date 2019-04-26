import React from 'react'
import PropTypes from 'prop-types'
import './formStyles.css'
import Fieldset from './Fieldset'
import Checkbox from './Checkbox'
import Select from './Select'
import FillForm from './FillForm'
import ConditionalsForm from './ConditionalsForm'
import options from './selectOptions'

const CommonForm = ({anfComponent, onInputChange, activeConditionalType, conditionalIndex}) => {
    const {conditionals} = anfComponent
    let conditions = {}

    if (conditionals && conditionals.length && typeof conditionalIndex === 'number') {
        // using conditions[0] for all until I know why they are using an array in the first place
        switch(activeConditionalType) {
            case 'component':
                anfComponent = conditionals[conditionalIndex]
                break
            case 'style':
                anfComponent = {style: anfComponent.style.conditionals[conditionalIndex]}
                break
            case 'layout':
                anfComponent = {layout: anfComponent.layout.conditionals[conditionalIndex]}
                break
            default:
                console.log('missed conditional case in CommonForm switch()')
                break
        }
        conditions = anfComponent.conditions[0]
    }

    let {identifier, role, hidden, anchor: a, layout: l, style: s, ...rest} = anfComponent
    const {margin: m} = l
    const {border: b} = s
    
    const anchorInputs = [
        {name: "Target", value: a.target, onInputChange},
        {name: "Target Component Identifier", value: a.targetComponentIdentifier, onInputChange, options: options.targetComponentIdentifier },
        {name: "Range Start", value: a.rangeStart, onInputChange },
        {name: "Range Length", value: a.rangeLength, onInputChange },
        {name: "Origin Anchor Position", value: a.originAnchorPosition, onInputChange, options: options.verticalPosition },
        {name: "Target Anchor Position", value: a.targetAnchorPosition, onInputChange, options: options.verticalPosition },
    ]

    const layoutInputs = [
        {name: "Column Start", value: l.columnStart, onInputChange },
        {name: "Column Span", value: l.columnSpan, onInputChange },
        {name: "Minimum Height", value: l.minimumHeight, onInputChange },
        {name: "Maximum Content Width", value: l.maximumContentWidth, onInputChange },
        {name: "Horizontal Content Alignment", value: l.horizontalContentAlignment, onInputChange, options: options.horizontalPosition },
        {name: "Ignore Document Gutter", value: l.ignoreDocumentGutter, onInputChange, checked: false},
        {name: "Ignore Document Margin", value: l.ignoreDocumentMargin, onInputChange, checked: false},
    ]

    const marginInputs = [
        {name: "Top", value: m.top, onInputChange, classes: "quarter-width" },
        {name: "Right", value: m.right, onInputChange, classes: "quarter-width" },
        {name: "Bottom", value: m.bottom, onInputChange, classes: "quarter-width" },
        {name: "Left", value: m.left, onInputChange, classes: "quarter-width" },
    ]

    const styleInputs = [
        {name: "Background Color", value: s.backgroundColor, onInputChange },
        {name: "Opacity", value: s.opacity, onInputChange },
    ]

    const borderInputs = [
        {name: "Width", value: b.all.width, onInputChange },
        {name: "Color", value: b.all.color, onInputChange },
        {name: "Top", value: b.top, onInputChange, classes: "quarter-width", checked: false},
        {name: "Right", value: b.right, onInputChange, classes: "quarter-width", checked: false},
        {name: "Bottom", value: b.bottom, onInputChange, classes: "quarter-width", checked: false},
        {name: "Left", value: b.left, onInputChange, classes: "quarter-width", checked: false},
    ]

    return (
        <div className="CommonForm">
            <p>Identifier: {identifier}</p>
            <ConditionalsForm {...{identifier, activeConditionalType, onInputChange, conditions}} name="component"  /><br/>
            {(activeConditionalType === '') && <Select name="role" value={role} onInputChange={onInputChange} classes="half-width" options={options.role} />}
            <Checkbox name="Hidden" onInputChange={onInputChange} classes="quarter-width" checked={false} />
            <Fieldset legend="ANCHOR" inputs={anchorInputs} />
            <Fieldset legend="LAYOUT" inputs={layoutInputs}>
                <Fieldset legend="MARGIN" inputs={marginInputs} />
            </Fieldset>
            <Fieldset legend="STYLE" inputs={styleInputs}>
                <Fieldset legend="BORDER" inputs={borderInputs} />
                <FillForm fill={s.fill} {...{onInputChange}} />
            </Fieldset>
        </div>
    )
}

CommonForm.propTypes = {
    activeComponent: PropTypes.shape({
        identifier: PropTypes.string.isRequired,
        role: PropTypes.oneOf(options.role).isRequired,
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
    onInputChange: PropTypes.func.isRequired,
}

export default CommonForm
