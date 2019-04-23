import React from 'react'

const Fieldset = ({legend, children}) => {
    return (
        <fieldset className="margin-btm-small">
            <legend>{legend}</legend>
            {children}
        </fieldset>
    )
}

export default Fieldset