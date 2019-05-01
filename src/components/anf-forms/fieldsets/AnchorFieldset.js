import React from 'react'
import PropTypes from 'prop-types'
import Fieldset from '../Fieldset'
import '../formStyles.css'

const AnchorFieldset = ({hide = false, ...props}) => {

    const inputs = [
        {name: 'Target', value: 'target',},
        {name: 'Target Component Identifier', value: 'targetComponentIdentifier', options: 'targetComponentIdentifier' },
        {name: 'Range Start', value: 'rangeStart', },
        {name: 'Range Length', value: 'rangeLength', },
        {name: 'Origin Anchor Position', value: 'originAnchorPosition', options: 'verticalPosition' },
        {name: 'Target Anchor Position', value: 'targetAnchorPosition', options: 'verticalPosition' },
    ]

    return (
        <React.Fragment key={"conditionalfieldset" + props.keyId}>
            
            <Fieldset {...{hide, inputs, ...props}} />
        </React.Fragment>
    )
}

AnchorFieldset.propTypes = {
    identifier: PropTypes.string, 
    context: PropTypes.object, 
    onInputChange: PropTypes.func, 
    onConditionalCloseClick: PropTypes.func,
    hide: PropTypes.bool,
    keyId: PropTypes.number,
}

export default AnchorFieldset