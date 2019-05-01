import React from 'react'
import PropTypes from 'prop-types'
import Fieldset from '../Fieldset'
import '../formStyles.css'

const StyleFieldset = ({hide = false, conditionalOpen, ...props}) => {

    const fillType = props.context.fill.type
    
    const inputs = [
        {name: 'Background Color', value: 'backgroundColor', },
        {name: 'Opacity', value: 'opacity', },
        {
            legend: 'Fill',
            contextProp: 'fill',
            inputs: [
                // common fill inputs
                {name: 'Type', value: 'type', options: 'fillType' },
                {name: 'Attachment', value: 'attachment', options: 'fillAttachment' },
                // these will need to be handled conditionally
                {name: 'Horizontal Alignment', value: 'horizontalAlignment', options: 'horizontalPosition', hide: (fillType === 'linear_gradient')},
                {name: 'Vertical Alignment', value: 'verticalAlignment', options: 'verticalPosition', hide: (fillType === 'linear_gradient')},
                {name: 'URL', value: 'URL', hide: (fillType === 'linear_gradient')},
                {name: 'Fill Mode', value: 'fillMode', options: 'fillMode', hide: (fillType === 'linear_gradient' || fillType === 'repeatable_image')},
                {name: 'Repeat', value: 'repeat', options: 'fillRepeat', hide: (fillType !== 'repeatable_image')},
                {name: 'Height', value: 'height', hide: (fillType !== 'repeatable_image')},
                {name: 'Width', value: 'width', hide: (fillType !== 'repeatable_image')},
                {name: 'Still URL', value: 'stillURL', hide: (fillType !== 'video')},
                {name: 'Loop', value: 'loop', checked: false, hide: (fillType !== 'video')},
                {name: 'angle', value: 'angle', hide: (fillType !== 'linear_gradient')},
            ]
        }
    ]

    const className = ((hide || conditionalOpen) ? 'hide' : '')

    return (
        <React.Fragment key={"conditionalfieldset" + props.keyId}>
            <button className={className} onClick={props.onConditionalBtnClick}>&nbsp;IF&nbsp;</button>
            <Fieldset {...{hide, inputs, ...props}} />
        </React.Fragment>
    )
}

StyleFieldset.propTypes = {
    identifier: PropTypes.string.isRequired, 
    context: PropTypes.object, 
    onInputChange: PropTypes.func.isRequired, 
    onConditionalBtnClick: PropTypes.func.isRequired, 
    onConditionalCloseClick: PropTypes.func.isRequired,
    hide: PropTypes.bool,
    keyId: PropTypes.number.isRequired,
}

export default StyleFieldset