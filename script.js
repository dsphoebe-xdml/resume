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
        window.scrollTo(0, elem.offsetTop);
    };
});
