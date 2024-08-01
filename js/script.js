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
    /*$('#dateSearch').on('input', function() {
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
    });*/

        // Fonction de recherche par date
        function setupDateSearch(sectionId) {
            const searchInput = `#dateSearch${sectionId}`;
            const gallery = `#videoGallery${sectionId}`;
            const noResultsMessage = `#noResultsMessage${sectionId}`;
    
            $(searchInput).on('input', function() {
                const searchDate = $(this).val();
                let found = false;
                $(gallery).find('.video-content').each(function() {
                    const videoDate = $(this).find('.date').text();
                    if (videoDate === searchDate) {
                        $(this).show();
                        found = true;
                    } else {
                        $(this).hide();
                    }
                });
                if (!found) {
                    $(noResultsMessage).show();
                } else {
                    $(noResultsMessage).hide();
                }
            });
        }
    
        // Appliquer la fonction de recherche à chaque section
        setupDateSearch('Journaux');
        setupDateSearch('Documentaires');
        setupDateSearch('Emissions');
        setupDateSearch('Autres');
   
});

