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
});

// Event listener
window.addEventListener('load', () => {
    loadScript();
});

// Google map
function loadScript() {
    let script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCfNEuBu4tnk3NXX8G5YlyOIGCmj7lr5Wo&callback=init';
    document.body.appendChild(script);
}
function init() {
    navigator.geolocation.getCurrentPosition(function (position) {
        let myLoc = { 
            lat: position.coords.latitude, 
            lng: position.coords.longitude 
        };
        let mapOptions = {
            center: new google.maps.LatLng(myLoc.lat, myLoc.lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scaleControl: true,
            zoom: 16
        };
        let venueMap = new google.maps.Map(document.getElementById("map"), mapOptions);
        let marker = new google.maps.Marker({ position: myLoc, map: venueMap });
    });
}
