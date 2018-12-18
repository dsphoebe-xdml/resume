const $loading: HTMLElement = document.querySelector('.loading')

setTimeout(() => {
  $loading.style.display = 'none'
}, 1000)

const $liTags = document.querySelectorAll('nav > ul > li')
$liTags.forEach((li, i) => {
  $liTags[i].onmouseenter = x =>
    x.currentTarget.classList.add('active')

  $liTags[i].onmouseleave = x =>
    x.currentTarget.classList.remove('active')
})

const $aTags = document.querySelectorAll('nav > ul > li > a')
$aTags.forEach((a, i) => {
  $aTags[i].onclick = e => {
    e.preventDefault()
    const id = e.currentTarget.getAttribute('href')
    const elem = document.querySelector(id)
    let top = elem.offsetTop

    let n = 25
    let t = 50
    let currentTop = window.scrollY
    let targetTop = top
    const S = targetTop - currentTop
    const s = S / n
    let i = 0
    const idd = setInterval(() => {
      if (i === n) {
        clearInterval(idd)
        return
      }
      i = i + 1
      window.scrollTo(0, currentTop + s * i)
    }, t)
  }
})

