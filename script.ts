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
function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
// 浏览器给个动画的帧率
requestAnimationFrame(animate);

$aTags.forEach((a, i) => {
  $aTags[i].onclick = e => {
    e.preventDefault()
    const id = e.currentTarget.getAttribute('href')
    const elem = document.querySelector(id)
    let top = elem.offsetTop
    let currentTop = window.scrollY
    let targetTop = top
    let s = targetTop - currentTop
    var t = Math.abs((s/100)*300)
    var coords = { y: currentTop}; 
    var tween = new TWEEN.Tween(coords)
      .to({ y: targetTop }, t > 500 ? 500 : t)
      .easing(TWEEN.Easing.Quadratic.InOut) 
      .onUpdate(function() {
        window.scrollTo(0, coords.y)
      })
      .start(); 

  }
})

