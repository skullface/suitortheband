class ItemDropShadowHover {
  constructor() {
    this.offset = 0.1
  }

  move() {
    const merchLinks = document.querySelectorAll('.merch-link')
    merchLinks.forEach(merchLink => {
      const item = merchLink.querySelector('.item')
      const shadow = merchLink.querySelector('.shadow')
      item.addEventListener('mousemove', e => this.calc(e, shadow))
    })
  }

  px = value => `${value}px`

  calc = (e, shadow) => {
    const { offsetX, offsetY, currentTarget } = e
    const rect = currentTarget.getBoundingClientRect()
    const { width: offsetWidth, height: offsetHeight } = rect
    const { offset } = this

    const x = ((offsetWidth / 2 - offsetX) * offset) / 2
    const y = ((offsetHeight / 2 - offsetY) * offset) / 2

    const h = this.px(x)
    const w = this.px(y)

    shadow.style.transform = `translate(${h}, ${w})`
  }

  init() {
    this.move()
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const instance = new ItemDropShadowHover()
  instance.init()
})
