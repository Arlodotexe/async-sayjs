# async-sayjs
An async wrapper for [Say.js](https://github.com/marak/say.js/) that enables text to wait for each TTS request to finish before speaking the next one

# Installation
There is not currently an NPM module for async-sayjs. For now, simply download `async-say.js` to your project folder and use `const say = require('./async-say.js')` to import it.

# Usage

This wrapper is brand new and _stupidly_ simple. It doesn't carry over all of the functionality of say.js, yet. Here's what it can do:

``` Javascript

const say = require('./async-say.js');

// Speak something asynchronously
say.speak('The quick brown fox');

// Supply a string as the second parameter to change the TTS voice
say.speak('Jumped over the lazy dog', 'Microsoft Eva Mobile');


```