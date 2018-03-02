'use strict';

let wins = 0;
const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
let triesLeft = 15;
let word;
let key;
let wordBlank;
let wordBlankArray;
let lettersGuessed;

const game = {
    setWord: function(wordsArray) {
        word = wordsArray[Math.floor(Math.random() * 10)];
        for (let i = word.length; i > 0; i--) {
            wordBlank = wordBlank.concat('_');
        }
        document.getElementById('word').innerHTML = wordBlank;
        return word;
    },
    testKeys: function(currentWord, keyStroke) {
        if (currentWord.search(keyStroke) >= 0) {
            wordBlankArray = wordBlank.split('');
            while (currentWord.search(keyStroke) >= 0) {
                wordBlankArray[currentWord.search(keyStroke)] = keyStroke;
                currentWord = currentWord.slice(currentWord.search(keyStroke))
            }
            wordBlank = wordBlankArray.join('');
            document.getElementById('word').innerHTML = wordBlank;
        } else {
            triesLeft = triesLeft - 1;
            lettersGuessed = lettersGuessed.concat(keyStroke, ' ');
            document.getElementById('triesLeft').innerHTML = triesLeft;
            document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
        }
        return triesLeft; 
    },
    playGame: function() {

    }, 
};