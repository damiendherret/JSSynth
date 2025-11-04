var dogBarkingBuffer = null;
var context;

window.addEventListener('load', init, false);

function init() {
    try {
        context = new AudioContext();
    } catch (e) {
        alert('Web Audio API is not supported in this browser');
    }
}

function loadSound(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function() {
        context.decodeAudioData(request.response, function(buffer) {
            dogBarkingBuffer = buffer;
        }, onError);
    }
    request.send();
}

document.getElementById('playBtn').addEventListener('click', () => {
    loadSound('file_example_MP3_700KB.mp3');
});