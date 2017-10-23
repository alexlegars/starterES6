console.log('😎')

import app from './../scss/app.scss'
import Slider from './components/slider'
import HoverCta from './components/hoverCta'
import 'gsap'


const sliders = [...document.querySelectorAll('.slider_container')]
sliders.forEach( (item) => {
  let slider = new Slider(item)
})

const ctas = [...document.querySelectorAll('.cta-round')]
ctas.forEach( (item) => {
    let cta = new HoverCta(item)
})
