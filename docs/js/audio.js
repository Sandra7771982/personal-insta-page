$(document).ready(function(){

    let audio = $('#audioTrack')[0];
    console.log(audio);

    $playBtn = $('#audio-play');
    $pauseBtn = $('#audio-pause');
    $audioControl = $('[data-type="audio-control"]');



    initAudioPlayer();
    function initAudioPlayer() {
        $playBtn.parent().show();
        audio.loop = true;

        $audioControl.click(function () {
            if(audio.paused) {
                audio.play();
                $playBtn.parent().hide();
                $pauseBtn.parent().show();
            } else {
                audio.pause();
                $playBtn.parent().show();
                $pauseBtn.parent().hide();
            }
        });
    }


    // audio.play();

});
