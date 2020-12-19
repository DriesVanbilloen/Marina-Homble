(function (window, document) {
    "use strict";

    function init() {
        _initStickyHeader();
        _initPopupClose();
    }

    function _initStickyHeader() {
        window.addEventListener('scroll', function () {
            var header = document.querySelector('.dv-main-nav');
            if (this.scrollY > 150) {
                if (header && !header.classList.contains('dv-main-nav--sticky')) {
                    header.classList.add('dv-main-nav--sticky');
                }
            } else {
                header.classList.remove('dv-main-nav--sticky');
            }
        });
    }

    function _initPopupClose() {
        var closebutton = document.querySelector('.dv-close-icon svg');
        var popUp = document.querySelector('.dv-pop-up');

        if (window.sessionStorage.getItem('visited')) {
            popUp.classList.add('dv-pop-up--hidden');
        }

        closebutton.addEventListener('click', function(e) {
            e.preventDefault();

            popUp.classList.add('dv-pop-up--hidden');
            window.sessionStorage.setItem('visited', true);
        });
    }

    init();

})(this.window, this.document);
