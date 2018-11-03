$(document).ready(function(){

    var userFeed = new Instafeed({
        get: 'user',
        userId: '8788542736',
        accessToken: '8788542736.1677ed0.8d82fee708004dc9ad5b87422e613351',
        limit: 50,
        resolution: 'standard_resolution'
    });
    userFeed.run();

    setTimeout(function () {
        $('.instafeed').addClass('shadowed');
    }, 100);


});