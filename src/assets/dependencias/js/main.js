/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : MediHub - Medical & Health Template
    Version         : 1.0
    
* ================================================================= */

(function($) {
    "use strict";

    $(document).on('ready', function() {



   
        //Variables on page load
        var $immortalCarousel = $('.animate_text'),
            $firstAnimatingElems = $immortalCarousel.find('.item:first').find("[data-animation ^= 'animated']");
        //Initialize carousel
        $immortalCarousel.carousel();
        //Animate captions in first slide on page load
        doAnimations($firstAnimatingElems);
        //Other slides to be animated on carousel slide event
        $immortalCarousel.on('slide.bs.carousel', function(e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });




     
    }); // end document ready function
})(jQuery); // End jQuery