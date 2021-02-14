(function (window, document) {
    "use strict";

    function init() {
        _initStickyHeader();
        _initPopupClose();
        _initMobileNavigation();
    }

    function _initStickyHeader() {
        window.addEventListener('scroll', function () {
            var header = document.querySelector('.dv-main-nav');
            if (this.scrollY > 5) {
                if (header && !header.classList.contains('dv-main-nav--sticky')) {
                    header.classList.add('dv-main-nav--sticky');
                }
            } else {
                header.classList.remove('dv-main-nav--sticky');
            }
        });
    }

    function _initPopupClose() {
        setTimeout(function() {
            var closebutton = document.querySelector('.dv-close-icon svg');
            var popUp = document.querySelector('.dv-pop-up');

            if (!window.sessionStorage.getItem('visited')) {
                popUp.classList.remove('dv-pop-up--hidden');
            }

            closebutton.addEventListener('click', function (e) {
                e.preventDefault();

                popUp.classList.add('dv-pop-up--hidden');
                window.sessionStorage.setItem('visited', true);
            });
        }, 2000);
    }

    function _initMobileNavigation() {
        var button = document.querySelector('button.dv-hamburger');
        var closeButton = document.querySelector('.dv-main-nav__wrapper .dv-close-icon');
        var mobileNav = document.querySelector('.dv-navigation');

        button.onclick = function () {
            document.body.style.overflow = 'hidden';
            mobileNav.classList.add('dv-navigation--mobile');

            button.classList.add('dv-hamburger--hidden');
            closeButton.classList.remove('dv-close-icon--hidden');
        }

        closeButton.onclick = function () {
            document.body.style.overflow = 'auto';
            mobileNav.classList.remove('dv-navigation--mobile');

            button.classList.remove('dv-hamburger--hidden');
            closeButton.classList.add('dv-close-icon--hidden');
        }
    }

    init();

})(this.window, this.document);
