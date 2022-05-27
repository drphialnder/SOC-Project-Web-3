var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 50) {
        nav.classList.add('bg-light', 'shadow', 'trans');
        document.getElementById("mynav").style.height = "60px";
        document.getElementById("mylogo").style.width = "32px";
        document.getElementById("mylogo").style.height = "32px";

    } else {
        nav.classList.remove('bg-light', 'shadow');
        document.getElementById("mynav").style.height = "100px";
        document.getElementById("mylogo").style.width = "42px";
        document.getElementById("mylogo").style.height = "42px";

    }
});