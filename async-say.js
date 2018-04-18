const say = require('say');

function speak() {
    let fn = function() { };
    var speechQ = [];
    fn.speak = function(phrase, TTSVoice, speed, callback) {
        speaking = {
            now: null
        }
        function trySpeech() {
            speechQ.push(phrase);

            if (speaking.now === false || speechQ.length == 1) {
                speaking.now = true;
                say.speak(speechQ.slice(-1)[0], TTSVoice, speed, (err) => {
                    speaking.now = false;
                    speechQ.pop();
                    if(callback) callback();
                });
            } else {
                setTimeout(function() {
                    trySpeech();
                }, 250);
            }
        }
        trySpeech();
    }
    fn.now = function(phrase, TTSVoice) {
        say.speak(phrase, TTSVoice);
    }
    fn.stop = function(callback) {
        say.stop(() => {
            if (callback) callback();
        });
    }
    return fn;
}

module.exports = speak();