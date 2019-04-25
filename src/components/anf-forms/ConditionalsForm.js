import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon'
import './ConditionalsForm.css'
import Fieldset from './Fieldset'
import options from './selectOptions'

// this shows up in the CommonForm when the [IF] button is clicked,
// activating conditional mode. the sortable component list
// also becomes a sortable conditional object list
const ConditionalsForm = ({identifier, name, activeConditional, conditions, onInputChange}) => {

    const conditionalsFormInputs = [
        {name: "View Location", onInputChange, options: options.viewLocation},
        {name: "Subscription Status", onInputChange, options: options.subscriptionStatus},
        {name: "Horizontal Size Class", onInputChange, options: options.sizeClass},
        {name: "Vertical Size Class", onInputChange, options: options.sizeClass},
        {name: "Min Content Size Category", onInputChange, options: options.contSize},
        {name: "Max Content Size Category", onInputChange, options: options.contSize},
        {name: "Min Spec Version", onInputChange},
        {name: "Max Spec Version", onInputChange},
        {name: "Min Columns", onInputChange},
        {name: "Max Columns", onInputChange},
        {name: "Min Viewport Aspect Ratio", onInputChange},
        {name: "Max Viewport Aspect Ratio", onInputChange},
        {name: "Min Viewport Width", onInputChange},
        {name: "Max Viewport Width", onInputChange},
        {name: "Platform", onInputChange},
    ]

    return (activeConditional === name) 
        ? (
            <>
                <button name="conditional-back">{<Icon fontSize="inherit">arrow_back_ios</Icon>}</button>
                <Fieldset legend="Conditions" inputs={conditionalsFormInputs} />
            </>
        ) 
        : (
            <>
                <button name="conditional-open">IF</button> Conditionals
            </>
        )
}

ConditionalsForm.propTypes = {
    identifier: PropTypes.string,
    activeConditional: PropTypes.string,
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
        platform: PropTypes.oneOfType([
            PropTypes.string, PropTypes.number
        ]),
    }),
    onInputChange: PropTypes.func,
}

export default ConditionalsForm