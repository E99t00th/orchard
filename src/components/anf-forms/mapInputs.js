import React from 'react'
import Input from './Input'
import Select from './Select'
import Checkbox from './Checkbox'
import customInputs from './customInputs'

const mapInputs = (x, i) => {
    
    if (x.custom) { return customInputs[custom](x, i) }

    if (x.legend) { return <Fieldset {...x} key={x.identifier + i} /> }

    if (x.options) { return <Select {...x} key={x.identifier + i} /> }

    if (typeof x.checked === "boolean") { return <Checkbox {...x} key={x.identifier + i} /> }

    return <Input {...x} key={x.identifier + i} />

}

export default mapInputs