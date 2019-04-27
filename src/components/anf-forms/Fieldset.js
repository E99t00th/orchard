import React from 'react'
import {mapInputs} from './formUtils'

const Fieldset = ({identifier, onInputChange, legend, children, inputs, hide = false}) => {

    const className = "margin-btm-small" + ((hide) ? ' hide' : '')

    const addProps = x => ({...x, identifier, onInputChange})

    return (
        <fieldset {...{className}}>
            <legend>{legend}</legend>
            {(inputs) && inputs.map(addProps).map(mapInputs)}
            {children}
        </fieldset>
    )
}

export default Fieldset