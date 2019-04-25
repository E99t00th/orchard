import React from 'react'
import Input from './Input'
import Select from './Select'
import Checkbox from './Checkbox';

const Fieldset = ({legend, children, inputs, childrenAbove}) => {

    const mapInputs = (x, i) => {
        const classes = x.classes || "half-width"

        return (x.options) 
            ? <Select {...x} key={legend + i} classes={classes} /> 
            : ( ( typeof x.checked === "boolean" ) 
                ? <Checkbox {...x} key={legend + i} classes={classes} />
                : <Input {...x} key={legend + i} classes={classes} /> )
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