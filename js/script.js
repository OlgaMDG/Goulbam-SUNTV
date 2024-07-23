$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.overlay').show();
        $('.menu-popup').show();
    });
    $('.overlay, .close-btn, .menu').click(function(){
        $('.overlay').hide();
        $('.menu-popup').hide();
    });
});




