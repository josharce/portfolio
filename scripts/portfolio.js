var mediumWindowSize = window.matchMedia("(min-width: 768px)");

$('.navbar-nav a').on('click', function (event) {
    $('.navbar-nav a').removeClass('nav-item-active');
    $(this).addClass('nav-item-active');
    if (!mediumWindowSize.matches) {
        $('.navbar-toggler').click();
        /*if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 250
            }, 800, function () {
                window.location.hash = hash;
            });
        }*/
    } /*else {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            /*$('html, body').animate({
                scrollTop: $(hash).offset().top - 75
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    }*/
});

/*if (!mediumWindowSize.matches) {
    $('.devicons i').addClass('colored');
    $('#name').html('<br />JOSH ARCE');
} else {
    $('.about-me').on('mouseenter mouseleave', function() {
        $('.devicons i').toggleClass('colored');
    });
}*/

$(window).resize(function() {
    if (!mediumWindowSize.matches) {
        $('#name').html('<br />JOSH ARCE');
    } else {
        $('#name').html('JOSH ARCE');
    }
});
