import React from 'react'
import PropTypes from 'prop-types'

const Input = ({name, classes, value, context, onInputChange: onChange, hide = false}) => {
    const htmlFor = name.split(' ').join('-').toLowerCase()
    let className = classes || 'default-input'
        className += ((hide) ? ' hide' : '')

    return (
        <>
            <label {...{className, htmlFor}}>
                {name}<br/>
                <input type="text" className="margin-btm-small" name={htmlFor} value={context[value]} {...{onChange}} />
            </label>
        </>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired, 
    classes: PropTypes.string, 
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onInputChange: PropTypes.func.isRequired,
    hide: PropTypes.bool,
}

export default Input