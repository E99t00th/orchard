import React from 'react'
import PropTypes from 'prop-types'
import selectOptions from './selectOptions'

const Select = ({name, value, options, classes, onInputChange: onChange, context, hide = false}) => {
    const htmlFor = name.split(' ').join('-').toLowerCase()
    let className = classes || 'default-select'
        className += ((hide) ? ' hide' : '')

    const optionsArr = selectOptions[options]

    const mapOptions = x => <option key={x} value={x}>{x}</option>
    
    return (
        <>
            <label {...{className, htmlFor}}>
                {name}<br/>
                <select className="margin-btm-small" name={htmlFor} value={context[value]} {...{onChange}}>
                    {optionsArr.map(mapOptions)}
                </select>
            </label>
        </>
    )
}

Select.propTypes = {
    name: PropTypes.string.isRequired, 
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    options: PropTypes.string.isRequired,
    classes: PropTypes.string, 
    onInputChange: PropTypes.func.isRequired, 
    hide: PropTypes.bool,
}

export default Select