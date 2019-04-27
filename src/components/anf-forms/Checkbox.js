import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({name, checked, classes, onInputChange: onChange, hide = false}) => {
    const htmlFor = name.split(' ').join('-').toLowerCase()
    let className = classes || 'default-checkbox'
        className += ((hide) ? ' hide' : '')

    return (
        <>
            <label {...{className, htmlFor}}>
                {name}
                <input type="checkbox" className="margin-btm-small" name={htmlFor} {...{checked, onChange}} />
            </label>
        </>
    )
}

Checkbox.propTypes = {
    name: PropTypes.string, 
    checked: PropTypes.bool,
    classes: PropTypes.string, 
    onInputChange: PropTypes.func, 
    hide: PropTypes.bool,
}

export default Checkbox