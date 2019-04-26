import React from 'react'

const Select = ({name, value, options, classes, onInputChange}) => {
    const htmlName = name.split(' ').join('-').toLowerCase()

    const mapOptions = x => <option key={x} value={x}>{x}</option>
    
    return (
        <>
            <label className={classes} htmlFor={htmlName}>
                {name}<br/>
                <select className="margin-btm-small" name={htmlName} value={value} onChange={onInputChange}>
                    {options.map(mapOptions)}
                </select>
            </label>
        </>
    )
}

export default Select