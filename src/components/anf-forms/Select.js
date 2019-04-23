import React from 'react'

const Select = ({name, options, classes}) => {
    const htmlName = name.split(' ').join('-').toLowerCase()

    const mapOptions = x => <option key={x} value={x}>{x}</option>
    
    return (
        <>
            <label className={classes} htmlFor={htmlName}>
                {name}<br/>
                <select className="margin-btm-small" name={htmlName}>
                    {options.map(mapOptions)}
                </select>
            </label>
        </>
    )
}

export default Select