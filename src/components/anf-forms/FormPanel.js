import React from 'react'
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

export default FormPanel