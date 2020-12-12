(function (window, document){
    "use strict";
    
    function init() {
        _initStickyHeader();
    }
    
    function _initStickyHeader() {
        window.addEventListener('scroll', function() {
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

    init();
    
})(this.window, this.document);