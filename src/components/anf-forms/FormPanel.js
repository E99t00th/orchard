import React from 'react'
import PropTypes from 'prop-types'
import {mapInputs} from './formUtils'

const FormPanel = ({identifier, classes, onInputChange, inputs, hide = false}) => {

    let className = classes || 'default-formpanel' 
        className += ((hide) ? ' hide' : '')

    const addProps = x => ({...x, identifier, onInputChange})

    return (
        <div {...{className}}>
            {(inputs) && inputs.map(addProps).map(mapInputs)}
        </div>
    )
}

FormPanel.propTypes = {
    formPanelName: PropTypes.string,
    identifier: PropTypes.string, 
    classes: PropTypes.string, 
    onInputChange: PropTypes.func, 
    inputs: PropTypes.array, 
    hide: PropTypes.bool,
}

export default FormPanel