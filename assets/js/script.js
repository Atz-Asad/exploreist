
(function ($) {
  "use strict";
  
    // 07. Data CSS Js
    // const singleImages = document.querySelectorAll('.s');

    // singleImages.forEach(image => {
    //     image.classList.add('slideup');
    // });

    var copy = document.querySelector(".slider-top-bottom-wrapper").cloneNode(true);
    document.querySelector(".slider-top-bottom").appendChild(copy);
    
    
   
    
    $('.inner_page_demoslider').bxSlider({
        minSlides: 4,
        maxSlides: 4,
        slideMargin: 40,
        slideWidth: 400,
        ticker: true,
        // speed: 9000,
        speed:18000,
        responsive: true,
        responsive: {
            600: {
                items: 2
            }
        }
    });


   

    if ($('.scroll_to_top').length > 0) {

        document.addEventListener("DOMContentLoaded", function() {
            const scrollToTopButton = document.querySelector('.scroll_to_top');
        
            // Show the button when user scrolls down
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 500) {
                    scrollToTopButton.classList.add('show');
                } else {
                    scrollToTopButton.classList.remove('show');
                }
            });
        
            // Smooth scroll back to top
            scrollToTopButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
        
    };




    AOS.init();







})(jQuery);