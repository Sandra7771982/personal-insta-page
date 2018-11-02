$(document).ready(function(){

    let slideIndex = 0;
    showPhotos();

    function showPhotos() {
        let i;
        let slides = $('.photo img');
        for (i = 0; i < slides.length; i++) {
            $(slides[i]).hide();
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        $(slides[slideIndex-1]).fadeIn();

        setTimeout(showPhotos, 3000);

    }

});