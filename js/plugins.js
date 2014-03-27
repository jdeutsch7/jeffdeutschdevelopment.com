// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$(function (){
    // Main Navigation Responsive Menu
    $('.menu-dropdown').click(function(){
        $('.main-menu').stop().slideToggle(400, function() {
            $(this).attr('style', '');
            $('.menu-dropdown').toggleClass('open');
            $(this).toggleClass("active");
        })
    });

    // close menu after click
    var width = $(document).width();
    console.log(width);
    $('.scroll-link').click(function(){
        if(width < 768) {
            $('.main-menu').stop().slideUp(400, function() {
                $(this).attr('style', '');
                $('.menu-dropdown').removeClass('open');
                $(this).removeClass("active");
            });
        }
    });     

    // Services content selector
    $('.services-icons').find('a').click(function(){
        var selector = $(this).attr('data-service');
        var choice = $('.services-desc[data-description=' + selector + ']')

        if (choice) {
            $('.services-desc').each(function(){
                $(this).removeClass('active');
            });
            $('.services-icons').find('a').each(function(){
                $(this).removeClass('highlight');
            });

            $(this).addClass('highlight');
            choice.addClass('active');
        }
    });

    // Initiate scrollTo menu if location = homepage
    if(location.pathname=="/") {
        $('.scroll-link').on('click', function(event) {
            event.preventDefault();
            $.scrollTo(event.target.hash, 1000, { top:0, axis:'y' });
            console.log(event.target.hash);
        });
    }

});