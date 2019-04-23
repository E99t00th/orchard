import { configure } from '@storybook/react'
import '../src/index.css'
import WebFont from 'webfontloader'

WebFont.load({
    google: {
        families: ['Roboto:400,500', 'Material+Icons']
    }
})

const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
