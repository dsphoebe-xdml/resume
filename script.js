var $loading = document.querySelector('.loading');
setTimeout(function () {
    $loading.style.display = 'none';
}, 1000);
var $liTags = document.querySelectorAll('nav > ul > li');
$liTags.forEach(function (li, i) {
    $liTags[i].onmouseenter = function (x) {
        return x.currentTarget.classList.add('active');
    };
    $liTags[i].onmouseleave = function (x) {
        return x.currentTarget.classList.remove('active');
    };
});
var $aTags = document.querySelectorAll('nav > ul > li > a');
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
// 浏览器给个动画的帧率
requestAnimationFrame(animate);
$aTags.forEach(function (a, i) {
    $aTags[i].onclick = function (e) {
        e.preventDefault();
        var id = e.currentTarget.getAttribute('href');
        var elem = document.querySelector(id);
        var top = elem.offsetTop;
        var currentTop = window.scrollY;
        var targetTop = top;
        var s = targetTop - currentTop;
        var t = Math.abs((s / 100) * 300);
        var coords = { y: currentTop };
        var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, t > 500 ? 500 : t)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
            window.scrollTo(0, coords.y);
        })
            .start();
    };
});
