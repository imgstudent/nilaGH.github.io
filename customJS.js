"use strict";

$(document).ready(function() {
    // Mouseover event on the navigation hamburger in small screen
    $('.fa-bars').mouseover(function() {
        $(this).removeClass('fa-bars').addClass('fa-hamburger');
    }).mouseout(function() {
        $(this).removeClass('fa-hamburger').addClass('fa-bars');
    });

    // Animation of contact slides with mouse scroll
    (function($) {
        $.fn.visible = function(partial) {
            let $t            = $(this),
                $w            = $(window),
                viewTop       = $w.scrollTop(),
                viewBottom    = viewTop + $w.height(),
                _top          = $t.offset().top,
                _bottom       = _top + $t.height(),
                compareTop    = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;      
            return ((compareBottom <= viewBottom) && (compareTop >= viewTop)); 
        };
    })(jQuery);
    $(window).scroll(function(event) { 
        $(".moduleSlide").each(function(index, element) {
            if ($(element).visible(true)) {
                $(element).addClass("come-in"); 
            } 
        });
    });

    // Scroll event for scrolling up and down
    let lastScrollTop = 0;
    $(window).scroll(function(event) {
        let currentScrollPosition = $(this).scrollTop();
        if(currentScrollPosition > lastScrollTop) {
            $('#scrollEvent').text('You scrolled down');
        } else {
            $('#scrollEvent').text('You scrolled up');
        }
        lastScrollTop = currentScrollPosition;
    });
});

