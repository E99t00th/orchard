import React from 'react'
import Input from './Input'
import Select from './Select'
import Checkbox from './Checkbox'
import customInputs from './customInputs'
import Fieldset from './Fieldset'

export const mapInputs = (x, i) => {

    const makeKey = (arr) => [x.identifier, ...arr, i].join('').replace(/\s/gi, '')

    
    if (x.custom) { return customInputs[custom](x, i) }

    if (x.legend) { return <Fieldset {...x} key={makeKey([x.legend])} /> }

    if (x.options) { return <Select {...x} key={makeKey([x.name])} /> }

    if (typeof x.checked === "boolean") { return <Checkbox {...x} key={makeKey([x.name, '100'])} /> }

    return <Input {...x} key={ makeKey([x.name, '200'])} />

}

export default mapInputs