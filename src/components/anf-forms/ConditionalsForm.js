import React from 'react'
import Icon from '@material-ui/core/Icon'
import './ConditionalsForm.css'
import Fieldset from './Fieldset'

// this shows up in the CommonForm when the [IF] button is clicked,
// activating conditional mode. the sortable component list
// also becomes a sortable conditional object list
const ConditionalsForm = ({activeConditional, ...rest}) => {

    const options = {
        subscriptionStatus: ['', 'bundle', 'subscribed'],
        sizeClass: ['', 'any', 'regular', 'compact'],
        contSize: ['', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'AX-M', 'AX-L', 'AX-XL', 'AX-XXL', 'AX-XXXL'],
        viewLocation: ['', 'any', 'article', 'issue_table_of_contents', 'issue'],
    }

    const conditionalsFormInputs = [
        {name: "View Location", options: options.viewLocation},
        {name: "Subscription Status", options: options.subscriptionStatus},
        {name: "Horizontal Size Class", options: options.sizeClass},
        {name: "Vertical Size Class", options: options.sizeClass},
        {name: "Min Content Size Category", options: options.contSize},
        {name: "Max Content Size Category", options: options.contSize},
        {name: "Min Spec Version"},
        {name: "Max Spec Version"},
        {name: "Min Columns"},
        {name: "Max Columns"},
        {name: "Min Viewport Aspect Ratio"},
        {name: "Max Viewport Aspect Ratio"},
        {name: "Min Viewport Width"},
        {name: "Max Viewport Width"},
        {name: "Platform"},
    ]

    return (
        <>
            <button name="conditional-back"><Icon fontSize="inherit">arrow_back_ios</Icon></button>
            <Fieldset legend="Conditions" inputs={conditionalsFormInputs} />
        </>
    )
}

export default ConditionalsForm