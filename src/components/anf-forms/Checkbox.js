import React from 'react'

const Checkbox = ({name, checked, classes, onInputChange}) => {
    const htmlName = name.split(' ').join('-').toLowerCase()

    return (
        <>
            <label className={classes} htmlFor={htmlName}>
                {name}
                <input type="checkbox" className="margin-btm-small" checked={checked} name={htmlName} onChange={onInputChange} />
            </label>
        </>
    )
}

export default Checkbox