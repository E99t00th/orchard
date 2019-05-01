import React from 'react'
import PropTypes from 'prop-types'
import Fieldset from '../Fieldset'
import '../formStyles.css'

const ConditionalFieldset = ({hide = true, ...props}) => {

    const inputs = [
        {name: 'View Location', value: 'viewLocation', options: 'viewLocation'},
        {name: 'Subscription Status', value: 'subscriptionStatus', options: 'subscriptionStatus'},
        {name: 'Horizontal Size Class', value: 'horizontalSizeClass', options: 'sizeClass'},
        {name: 'Vertical Size Class', value: 'verticalSizeClass', options: 'sizeClass'},
        {name: 'Min Content Size Category', value: 'minContentSizeCategory', options: 'contSize'},
        {name: 'Max Content Size Category', value: 'maxContentSizeCategory', options: 'contSize'},
        {name: 'Min Spec Version', value: 'minSpecVersion'},
        {name: 'Max Spec Version', value: 'maxSpecVersion'},
        {name: 'Min Columns', value: 'minColumns'},
        {name: 'Max Columns', value: 'maxColumns'},
        {name: 'Min Viewport Aspect Ratio', value: 'minViewportAspectRatio'},
        {name: 'Max Viewport Aspect Ratio', value: 'maxViewportAspectRatio'},
        {name: 'Min Viewport Width', value: 'minViewportWidth'},
        {name: 'Max Viewport Width', value: 'maxViewportWidth'},
        {name: 'Platform', value: 'platform', options: 'platform'},
    ]

    const className = ((hide) ? 'hide' : '')

    return (
        <React.Fragment key={"conditionalfieldset" + props.keyId}>
            <button {...{className}} onClick={props.onConditionalCloseClick}>&nbsp;&lt;&nbsp;</button>
            <Fieldset {...{...props, inputs, hide}} />
        </React.Fragment>
    )
}

ConditionalFieldset.propTypes = {
    identifier: PropTypes.string, 
    context: PropTypes.object, 
    onInputChange: PropTypes.func, 
    onConditionalCloseClick: PropTypes.func,
    hide: PropTypes.bool,
    keyId: PropTypes.number,
}

export default ConditionalFieldset