window.onload = init;
var context;
var bufferLoader;

function init() {
    context = new AudioContext();

    bufferLoader = new BufferLoader(
    context,
    [
        'file_example_WAV_1MG.wav'
    ],
    finishedLoading
    );

    bufferLoader.load();
}

function finishedLoading(bufferList) {
    // Create two sources and play them both together.
    var source1 = context.createBufferSource();
    source1.buffer = bufferList[0];
    source1.connect(context.destination);
    source1.noteOn(0);

}