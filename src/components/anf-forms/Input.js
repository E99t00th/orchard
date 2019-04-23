import React from 'react'

const Input = ({name, classes, value}) => {
    const htmlName = name.split(' ').join('-').toLowerCase()

    return (
        <>
            <label className={classes} htmlFor={htmlName}>
                {name}<br/>
                <input type="text" className="margin-btm-small" name={htmlName} value={value} />
            </label>
        </>
    )
}

export default Input