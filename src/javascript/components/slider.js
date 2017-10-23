class Slider {
  constructor(container) {
    this.container = container
    this.slider = this.container.querySelector('.slider')
    this.slides = [...this.container.querySelectorAll('.slide')]
    this.pointsContainer = this.container.querySelector('.slider_nav')
    this.left = this.container.querySelector('.slider_goleft')
    this.right = this.container.querySelector('.slider_goright')
    this.points = []
    this.current = 0
    this.init()
  }

  init() {
    // Create Navigation Points based on how many slide there is
    for (let i = 0; i < this.slides.length; i++) {
      let item = document.createElement('div')
      item.classList.add('slider_point')
      if (i === 0) {
        item.classList.add('slider_point-activ')
      }
      item.dataset.order = i
      this.pointsContainer.insertBefore(item, this.right)
      this.points.push(item)
    }

    // Click on left chevron
    this.left.addEventListener('click', () => {
      this.current--
      if (this.current < 0) {
        this.current = this.slides.length - 1
      }
      this.slideTo()
    })

    // Click on right chevron
    this.right.addEventListener('click', () => {
      this.current++
      if (this.current > this.slides.length -1) {
        this.current = 0
      }
      this.slideTo()
    })

    // Click on a navigation point
    this.points.forEach( (point) => {
      point.addEventListener('click', () => {
        this.current = point.dataset.order
        this.slideTo()
      })
    })

  }

  // Slide function depending on this.current
  slideTo() {
    TweenMax.to(this.slider, 0.5, {
      ease: Power2.easeOut,
      x: -(window.innerWidth * this.current)
    })

    document.querySelector('.slider_point-activ').classList.remove('slider_point-activ')
    this.points[this.current].classList.add('slider_point-activ')
  }

}

export default Slider
