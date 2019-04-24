import React from 'react'
import Input from './Input'
import Select from './Select'
import Checkbox from './Checkbox';

const Fieldset = ({legend, children, inputs, childrenAbove}) => {

    const mapInputs = x => {
        const classes = x.classes || "half-width"

        return (x.options) 
            ? <Select {...x} classes={classes} /> 
            : ( ( typeof x.checked === "boolean" ) 
                ? <Checkbox {...x} classes={classes} />
                : <Input {...x} classes={classes} /> )
    }

    return (
        <fieldset className="margin-btm-small">
            <legend>{legend}</legend>
            {childrenAbove}
            {(inputs) && inputs.map(mapInputs)}
            {children}
        </fieldset>
    )
}

export default Fieldset