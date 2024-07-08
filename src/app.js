function wrapEveryOtherLetter() {
  const headings = document.querySelectorAll('h1, h2')

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
        newContent += text[i]
      }
    }

    heading.innerHTML = newContent
  })
}

document.addEventListener('DOMContentLoaded', () => {
  wrapEveryOtherLetter()
})
