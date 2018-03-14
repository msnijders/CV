import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

// typed JS
import Typed from 'typed.js';

var typed3 = new Typed('.element', {
    strings: ['I am a: ', 'I am a: <strong>Web developer</strong>', 'I am a: <strong>Web designer</strong>', 'I am a: <strong>Freelancer</strong>'],
    typeSpeed: 40,
    backSpeed: 40,
    smartBackspace: true, // this is a default
    loop: true
  });

// Menu JS
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#header").addClass("shadow");
    }
    else {
        $("#header").removeClass("shadow");
    }
});



// Loading foundation
$(document).foundation();
