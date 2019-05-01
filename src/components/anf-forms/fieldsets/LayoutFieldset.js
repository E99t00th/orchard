import React from 'react'
import PropTypes from 'prop-types'
import Fieldset from '../Fieldset'
import '../formStyles.css'

const LayoutFieldset = ({hide = false, conditionalOpen, ...props}) => {

    const inputs = [
        {name: 'Column Start', value: 'columnStart', },
        {name: 'Column Span', value: 'columnSpan', },
        {name: 'Minimum Height', value: 'minimumHeight', },
        {name: 'Maximum Content Width', value: 'maximumContentWidth', },
        {name: 'Horizontal Content Alignment', value: 'horizontalContentAlignment', options: 'horizontalPosition' },
        {name: 'Ignore Document Gutter', value: 'ignoreDocumentGutter', checkbox: true},
        {name: 'Ignore Document Margin', value: 'ignoreDocumentMargin', checkbox: true},
        {legend: 'Margin',
        contextProp: 'margin',
        inputs: [
            {name: 'Top', value: 'top', classes: 'quarter-width' },
            {name: 'Right', value: 'right', classes: 'quarter-width' },
            {name: 'Bottom', value: 'bottom', classes: 'quarter-width' },
            {name: 'Left', value: 'left', classes: 'quarter-width' },
        ]},
    ]

    const className = ((hide || conditionalOpen) ? 'hide' : '')

    return (
        <React.Fragment key={"conditionalfieldset" + props.keyId}>
            <button className={className} onClick={props.onConditionalBtnClick}>&nbsp;IF&nbsp;</button>
            <Fieldset {...{hide, inputs, ...props}} />
        </React.Fragment>
    )
}

LayoutFieldset.propTypes = {
    identifier: PropTypes.string.isRequired, 
    context: PropTypes.object, 
    onInputChange: PropTypes.func.isRequired, 
    onConditionalBtnClick: PropTypes.func.isRequired, 
    onConditionalCloseClick: PropTypes.func.isRequired,
    hide: PropTypes.bool,
    keyId: PropTypes.number.isRequired,
}

export default LayoutFieldset