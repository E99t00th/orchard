import { configure } from '@storybook/react'
import requireContext from 'require-context.macro';
import '../src/index.css'
import WebFont from 'webfontloader'

WebFont.load({
    google: {
        families: ['Roboto:400,500', 'Material+Icons']
    }
})

const req = requireContext('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
