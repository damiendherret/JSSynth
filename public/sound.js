
//const audio = document.querySelector('audio');

const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');

const audioContext = new AudioContext();
const audio = new Audio('file_example_WAV_1MG.wav');

const source = audioContext.createMediaElementSource(audio);
const volumeNode = audioContext.createGain();
volumeNode.gain.value = 0.1; // Set volume to 50%

source.connect(volumeNode);
volumeNode.connect(audioContext.destination);


playBtn.addEventListener('click', () => {
    if (audioContext.state === 'suspended') {   
        audioContext.resume();
    }
    audio.play();
});

pauseBtn.addEventListener('click', () => {
    audio.pause();
});

stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});


