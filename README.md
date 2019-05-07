# async-sayjs
An async wrapper for [Say.js](https://github.com/marak/say.js/) that enables text to wait for each TTS request to finish before speaking the next one

# Installing

`npm install async-sayjs`

# Usage

NOTE: In it's current form, async-say will fail to execute asyncronously when an error occurs (such as giving it an invalid TTS Voice to use). This will probably be fixed in the future.

``` Javascript

const say = require('async-sayjs');

// Speak something asynchronously (wait for each request to finish before moving on)
say.speak('The quick brown fox');

// Speak something synchronously (Say it right now, even if something is already being said)
say.now('Jumped over the lazy dog');

// Supply a string as the second parameter to change the TTS voice
say.speak('As it ran through the woods', 'Microsoft David Desktop');

// Speak something, but slowly
say.speak('Lorem ipsum dolor sit amet', 'Microsoft Zira Desktop', 0.5);

// Speak something, then fire a callback
say.speak('Lorem ipsum dolor sit amet', 'Microsoft David Desktop', 0.5, (err) => {
    console.log('Done');
});

// Stop anything currently being spoken (Queued text will continue after that)
say.stop(callback);
```


---
### A note about the obvious:

This was my first npm module ever published. 

After a lot of learning I realized that this module actually provides a _synchronous_ wrapper for sayjs. However, I am unable to change the name of the module. 