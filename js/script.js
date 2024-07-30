$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.overlay, .menu-popup').show();
    });
    $('.overlay, .close-btn, .menu').click(function(){
        $('.overlay, .menu-popup').hide();
    });

    const currentDate = new Date().toLocaleString();
    $('.date-overlay').text(currentDate);

    /*$('#dateSearch').on('input', function() {
        const searchDate = $(this).val();
        $('.video-container').each(function() {
            const videoDate = $(this).find('.date-overlay').text();
            if (videoDate === searchDate) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });*/
});




                               