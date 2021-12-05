song = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

volume = 0.2;

function preload(){
    music = loadSound("Music.mp3");
}

function setup(){

}

function listen(){
    music.pause();
    recognition.start();
}

recognition.onresult = function(event) {
    var Content = event.results[0][0].transcript;
    console.log(Content);

    if (Content == "Increase the volume") {
        volume = volume + 0.2;
        music.setVolume(volume);
        speak(Content);
    }
    else if (Content == "Decrease the volume") {
        volume = volume - 0.2;
        music.setVolume(volume);
        speak(Content);
    }
    else {
        music.play();
    }
}

function speak(data) {
    var synth = window.speechSynthesis;
    speak_data = data + "to " + volume.toFixed(2);
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function(){
        music.play(); }, 3000);
}

function stop_music() {
    music.stop();
}

function play(){

    music.play();
    music.setVolume(volume);
    music.rate(1);
}
