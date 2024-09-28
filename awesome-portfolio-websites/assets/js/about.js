$(document).ready(function () {
    // Hide loader after the page is fully loaded
    $(window).on('load', function () {
        $('.loader-container').fadeOut('slow');
    });

    // Smooth scroll to anchors
    $('a[href^="#"]').on('click', function (event) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
