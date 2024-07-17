function wrapEveryOtherLetter() {
  const headings = document.querySelectorAll('h1, h2, .h2')

  headings.forEach(heading => {
    let newContent = ''
    const text = heading.textContent
    heading.setAttribute('aria-label', text)

    for (let i = 0; i < text.length; i++) {
      if (i % 3 === 2) {
        newContent += `<span class='n3'>${text[i]}</span>`
      } else if (i % 3 === 1) {
        newContent += `<span class='n2'>${text[i]}</span>`
      } else {
        newContent += `<span class='n1'>${text[i]}</span>`
      }
    }

    heading.innerHTML = newContent
  })
}

document.addEventListener('DOMContentLoaded', () => {
  wrapEveryOtherLetter()
})

window.addEventListener('load', (event) => {
  document.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', event => {
      let linkUrl = new URL(item.getAttribute('href'), window.location.href)
      let currentHostname = window.location.hostname
 
      if (linkUrl.hostname !== currentHostname) {
        let domainParts = linkUrl.hostname.split('.')
        let domainName = domainParts.length > 1 ? domainParts[domainParts.length - 2] : domainParts[0]
 
        fathom.trackEvent(`External link clicked: ${domainName}`)
      }
    })
  })
})
