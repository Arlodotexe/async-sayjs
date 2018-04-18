const say = require('say');

   function speak() {
    let fn = function(){};
    let speechQ = [];
    fn.speak = function(phrase, TTSVoice) {
        // Speak asynchronously, waiting for each TTS request to finish before speaking the next one
        speaking = {
            now: null,
            set: function(bool) {
                this.now = bool;
            }
        }
        function trySpeech() {
            speechQ.push(phrase);
            if(speaking.now === false || speechQ.length == 1) {
                speaking.now = true;	
                say.speak(speechQ.slice(-1)[0], TTSVoice, 1.0, (err) => {
                    speaking.now = false;
                    speechQ.pop();
                    if (err) {
                        console.log(err);
                    }
                });
            } else {
                speaking.now = true;
                setTimeout(function() {
                    trySpeech();
                }, 100);
            }
        }
        trySpeech();
    }	
    fn.now = function(phrase, TTSVoice) {
        // Speak immediately, talking over any other current TTS outputs 
        say.speak(phrase, TTSVoice);
    }
    return fn;
}

module.exports = speak();