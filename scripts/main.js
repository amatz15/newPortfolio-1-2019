$(document).ready(function () {

    var $header = $('header');
    var $sticky = $header.before($header.clone().addClass("sticky"));

    $(window).on("scroll", function () {
        var scrollFromTop = $(window).scrollTop();
        $("body").toggleClass("scroll", (scrollFromTop > 900));
    });

    // Masonry
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 125,
        fitWidth: true
        
    });

});
