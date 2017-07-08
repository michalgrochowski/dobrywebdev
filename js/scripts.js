//-- ScrollingNav
$(document).ready(function () {
    $(window).on('scroll', function(){
        $('#bs-example-navbar-collapse-1').collapse('hide')
    });
});
//-- OwlCarousel init
$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});
//-- OwlCarousel setup
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:15,
    nav:true,
    dots: false,
    navText: ["Poprzedni", "Następny"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        },
        1600:{
            items:5
        }
    }
})
// Show and hide Scroll-to-top arrow
var scrollTop = document.getElementById("scrollTop");

function showOnScroll() {
    var scrolled = window.scrollY;
    if (scrolled > window.innerHeight) {
        scrollTop.classList.add("show");
        scrollTop.classList.remove("hide");
    } else {
        scrollTop.classList.add("hide");
        scrollTop.classList.remove("show");
    }
};

window.addEventListener("scroll", function(){
    if (window.matchMedia('only screen and (min-width: 767px)').matches) {
    showOnScroll()};
});


