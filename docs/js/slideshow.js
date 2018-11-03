$(document).ready(function(){

    let slideIndex = 0;
    showPhotos();

    function showPhotos() {
        let i;
        let slides = $('#instafeed img');
        for (i = 0; i < slides.length; i++) {
            $(slides[i]).hide();
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        $(slides[slideIndex - 1]).fadeIn(1000);

        setTimeout(showPhotos, 5000);

    }

});