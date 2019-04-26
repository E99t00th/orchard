import React from 'react'

const Select = ({name, value, options, classes, onInputChange: onChange, hide = false}) => {
    const htmlFor = name.split(' ').join('-').toLowerCase()

    const className = classes + ((hide) ? ' hide' : '')

    const mapOptions = x => <option key={x} value={x}>{x}</option>
    
    return (
        <>
            <label {...{className, htmlFor}}>
                {name}<br/>
                <select className="margin-btm-small" name={htmlFor} {...{value, onChange}}>
                    {options.map(mapOptions)}
                </select>
            </label>
        </>
    )
}

export default Select