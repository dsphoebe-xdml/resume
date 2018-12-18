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
$aTags.forEach(function (a, i) {
    $aTags[i].onclick = function (e) {
        e.preventDefault();
        var id = e.currentTarget.getAttribute('href');
        var elem = document.querySelector(id);
        var top = elem.offsetTop;
        var n = 25;
        var t = 50;
        var currentTop = window.scrollY;
        var targetTop = top;
        var S = targetTop - currentTop;
        var s = S / n;
        var i = 0;
        var idd = setInterval(function () {
            if (i === n) {
                clearInterval(idd);
                return;
            }
            i = i + 1;
            window.scrollTo(0, currentTop + s * i);
        }, t);
    };
});
