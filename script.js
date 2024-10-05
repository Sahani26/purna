document.addEventListener("scroll", function() {
    const header = document.querySelector('.header_page_area');

    const scrollPosition = window.scrollY; // Get the current scroll position
    const adjustmentFactor = 100; // Factor to adjust the scroll position
    const baseValue = -20; // The base value you want to achieve

    header.style.backgroundPositionY = `${baseValue * (scrollPosition / adjustmentFactor)}px`;


   });

//    $("#menuopen").click(function(){
//     console.log("clicked")
//     $("p").toggleClass("main");
//   });



var scrolling;
var position = 0;
var delta = 5;
var hh = $('header').outerHeight();
var dh = $(document).height();
var wh = $(window).height();

$(window).scroll(function() {
    scrolling = true;
});

setInterval(function() {
    if (scrolling) {
        scrollFunction();
        scrolling = false;
    }
}, 250);

function scrollFunction() {
    var st = $(this).scrollTop();

    if (Math.abs(position - st) <= delta)
        return;

    if (st > position && st > hh) {
        $('header').removeClass('scroll-down').addClass('scroll-up');
    } else {
        if (st + wh < dh) {
            $('header').removeClass('scroll-up').addClass('scroll-down');
        }
    }
    position = st;
}



