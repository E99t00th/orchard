import React from 'react'
import Input from './Input'
import Select from './Select'
import Checkbox from './Checkbox'
import customInputs from './customInputs'

const Fieldset = ({legend, children, inputs, hide = false}) => {

    const mapInputs = (x, i) => {
        const classes = x.classes || "half-width"
        
        if (x.custom) { return customInputs[custom](x, i) }

        if (x.options) { return <Select {...x} key={legend + i} classes={classes} /> }

        if (typeof x.checked === "boolean") { return <Checkbox {...x} key={legend + i} classes={classes} /> }

        return <Input {...x} key={legend + i} classes={classes} />

    }

    const className = "margin-btm-small" + ((hide) ? ' hide' : '')

    return (
        <fieldset {...{className}}>
            <legend>{legend}</legend>
            {(inputs) && inputs.map(mapInputs)}
            {children}
        </fieldset>
    )
}

export default Fieldset