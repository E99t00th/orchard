import React from 'react'

const Checkbox = ({name, checked, classes}) => {
    const htmlName = name.split(' ').join('-').toLowerCase()

    return (
        <>
            <label className={classes} htmlFor={htmlName}>
                {name}
                <input type="checkbox" className="margin-btm-small" checked={checked} name={htmlName} />
            </label>
        </>
    )
}

export default Checkbox