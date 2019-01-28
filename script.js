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
window.onscroll = function (x) {
    var specialTags = document.querySelectorAll('[wrap]');
    var minIdx = 0;
    specialTags.forEach(function (st, i) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIdx].offsetTop - window.scrollY)) {
            minIdx = i;
        }
    });
    var id = specialTags[minIdx].id;
    var navTag = document.querySelector('a[href="#' + id + '"]');
    var active = document.querySelector('nav .active');
    !active ? void(0) : active.classList.remove('active');
    navTag && navTag.classList.add('active');
};
