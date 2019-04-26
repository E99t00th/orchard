import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon'
import './ConditionalsForm.css'
import Fieldset from './Fieldset'
import options from './selectOptions'

// this shows up in the CommonForm when the [IF] button is clicked,
// activating conditional mode. the sortable component list
// also becomes a sortable conditional object list
const ConditionalsForm = ({identifier, name, activeConditionalType, conditions: c, onInputChange, onClick}) => {

    const conditionalsFormInputs = [
        {name: "View Location", onInputChange, value: c.viewLocation, options: options.viewLocation},
        {name: "Subscription Status", onInputChange, value: c.subscriptionStatus, options: options.subscriptionStatus},
        {name: "Horizontal Size Class", onInputChange, value: c.horizontalSizeClass, options: options.sizeClass},
        {name: "Vertical Size Class", onInputChange, value: c.verticalSizeClass, options: options.sizeClass},
        {name: "Min Content Size Category", onInputChange, value: c.minContentSizeCategory, options: options.contSize},
        {name: "Max Content Size Category", onInputChange, value: c.maxContentSizeCategory, options: options.contSize},
        {name: "Min Spec Version", onInputChange, value: c.minSpecVersion},
        {name: "Max Spec Version", onInputChange, value: c.maxSpecVersion},
        {name: "Min Columns", onInputChange, value: c.minColumns},
        {name: "Max Columns", onInputChange, value: c.maxColumns},
        {name: "Min Viewport Aspect Ratio", onInputChange, value: c.minViewportAspectRatio},
        {name: "Max Viewport Aspect Ratio", onInputChange, value: c.maxViewportAspectRatio},
        {name: "Min Viewport Width", onInputChange, value: c.minViewportWidth},
        {name: "Max Viewport Width", onInputChange, value: c.maxViewportWidth},
        {name: "Platform", onInputChange, value: c.platform, options: options.platform},
    ]

    return (activeConditionalType === name) 
        ? (
            <>
                <button name="conditional-back" onClick={onClick}>{<Icon fontSize="inherit">arrow_back_ios</Icon>}</button>
                <Fieldset legend="Conditions" inputs={conditionalsFormInputs} />
            </>
        ) 
        : (
            <>
                <button name="conditional-open" onClick={onClick}>IF</button> Conditionals
            </>
        )
}

ConditionalsForm.propTypes = {
    identifier: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    activeConditionalType: PropTypes.oneOf(['', 'component', 'style', 'layout']).isRequired,
    conditions: PropTypes.shape({
        viewLocation: PropTypes.oneOf(options.viewLocation),
        subscriptionStatus: PropTypes.oneOf(options.subscriptionStatus),
        horizontalSizeClass: PropTypes.oneOf(options.sizeClass),
        verticalSizeClass: PropTypes.oneOf(options.sizeClass),
        minContentSizeCategory: PropTypes.oneOf(options.contSize),
        maxContentSizeCategory: PropTypes.oneOf(options.contSize),
        minSpecVersion: PropTypes.string,
        maxSpecVersion: PropTypes.string,
        minColumns: PropTypes.number,
        maxColumns: PropTypes.number,
        minViewportAspectRatio: PropTypes.number,
        maxViewportAspectRatio: PropTypes.number,
        minViewportWidth: PropTypes.number,
        maxViewportWidth: PropTypes.number,
        platform: PropTypes.oneOf(options.platform),
    }),
    onInputChange: PropTypes.func.isRequired,
}

export default ConditionalsForm