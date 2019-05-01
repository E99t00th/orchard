import React from 'react'
import PropTypes from 'prop-types'
import mapInputs from './formUtils'

export const FormPanel = ({identifier,  onInputChange, children, classes, context, inputs, hide = false}) => {

    let className = classes || 'default-formpanel' 
        className += ((hide) ? ' hide' : '')

    const addProps = (x) => ({...x, identifier, onInputChange, context})

    return (
        <div {...{className}}>
            {children}
            {(inputs) && mapInputs(context, inputs.map(addProps))}
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