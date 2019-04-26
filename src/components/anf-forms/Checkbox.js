import React from 'react'

const Checkbox = ({name, checked, classes, onInputChange: onChange, hide = false}) => {
    const htmlFor = name.split(' ').join('-').toLowerCase()

    const className = (hide) ? classes + ' hide' : classes

    return (
        <>
            <label {...{className, htmlFor}}>
                {name}
                <input type="checkbox" className="margin-btm-small" name={htmlFor} {...{checked, onChange}} />
            </label>
        </>
    )
}

export default Checkbox