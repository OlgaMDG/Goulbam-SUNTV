$(document).ready(function(){

    /*---------------Afficher notre pop up---------------*/
    $('.navbar-toggler').click(function(){
        $('.overlay, .menu-popup').show();
    });

    /*---------------Cacher notre pop up---------------*/
    $('.overlay, .close-btn, .menu').click(function(){
        $('.overlay, .menu-popup').hide();
    });

    /*---------------Recherche de vidéos par date---------------*/
    $('#dateSearch').on('input', function() {
        const searchDate = $(this).val();
        let found = false;
        $('.video-content').each(function() {
            const videoDate = $(this).find('.date').text();
            if (videoDate === searchDate) {
                $(this).show();
                found = true;
            } else {
                $(this).hide();
            }
        });
        if (!found) {
            $('#noResultsMessage').show();
        } else {
            $('#noResultsMessage').hide();
        }
    });
    
});
