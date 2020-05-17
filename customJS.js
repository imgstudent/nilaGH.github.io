"use strict";

$(document).ready(function() {
    // Mouseover event on the hamburger in small screen
    $('.fa-bars').mouseover(function() {
        $(this).removeClass('fa-bars').addClass('fa-hamburger');
    }).mouseout(function() {
        $(this).removeClass('fa-hamburger').addClass('fa-bars');
    });

    // Animation of "I am a creative web developer"
    // $('#summary').load(function() {
    //     $('#summary span:last-child').fadeOut("slow", function() {
    //         $(this).prev().fadeOut("slow", arguments.callee);
    //     });
    // });

});