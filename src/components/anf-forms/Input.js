import React from 'react'
import PropTypes from 'prop-types'

const Input = ({name, classes, value, onInputChange: onChange, hide = false}) => {
    const htmlFor = name.split(' ').join('-').toLowerCase()
    let className = classes || 'default-input'
        className += ((hide) ? ' hide' : '')

    return (
        <>
            <label {...{className, htmlFor}}>
                {name}<br/>
                <input type="text" className="margin-btm-small" name={htmlFor} {...{onChange, value}} />
            </label>
        </>
    )
}

Input.propTypes = {
    name: PropTypes.string, 
    classes: PropTypes.string, 
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onInputChange: PropTypes.func, 
    hide: PropTypes.bool,
}

export default Input