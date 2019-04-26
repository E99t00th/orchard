import React from 'react'

const Input = ({name, classes, value, onInputChange: onChange, hide = false}) => {
    const htmlFor = name.split(' ').join('-').toLowerCase()
    
    const className = (hide) ? classes + ' hide' : classes

    return (
        <>
            <label {...{className, htmlFor}}>
                {name}<br/>
                <input type="text" className="margin-btm-small" name={htmlFor} {...{onChange, value}} />
            </label>
        </>
    )
}

export default Input