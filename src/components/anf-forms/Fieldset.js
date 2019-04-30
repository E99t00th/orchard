import React from 'react'
import PropTypes from 'prop-types'
import mapInputs from './formUtils'

const Fieldset = ({identifier, onInputChange, legend, children, context, inputs, hide = false}) => {

    const className = "margin-btm-small" + ((hide) ? ' hide' : '')

    const addProps = (x) => ({...x, identifier, onInputChange, context})

    return (
        <fieldset {...{className}}>
            <legend>{legend}</legend>
            {(inputs) && mapInputs(context, inputs.map(addProps))}
            {children}
        </fieldset>
    )
}

Fieldset.propTypes = {
    identifier: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    legend: PropTypes.string.isRequired,
    context: PropTypes.object.isRequired,
    children: PropTypes.array,
    inputs: PropTypes.array,
    hide: PropTypes.bool,
}

export default Fieldset