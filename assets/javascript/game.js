'use strict';

const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
let wins;
let word;
let wordBlank;
let triesLeft;
let lettersGuessed;
let keyStroke;
let wordBlankArray;
let indexTracker;

const game = {
    setWord: function(wordsArray) {
        wins = 0;
        word = wordsArray[Math.floor(Math.random() * 10)];
        wordBlank = '';
        triesLeft = 15;
        lettersGuessed = '';
        for (let i = word.length; i > 0; i--) {
            wordBlank = wordBlank.concat('_');
        }
        document.getElementById('wins').innerHTML = wins;
        document.getElementById('word').innerHTML = wordBlank;
        document.getElementById('triesLeft').innerHTML = triesLeft;
    },
    testKeys: function(currentWord, currentKey) {
        if (currentWord.search(currentKey) >= 0) {
            wordBlankArray = wordBlank.split('');
            wordBlankArray[currentWord.search(currentKey)] = currentKey;
            indexTracker = currentWord.search(currentKey);
            currentWord = currentWord.slice(currentWord.search(currentKey) + 1);
            while (currentWord.search(currentKey) >= 0) {
                wordBlankArray[indexTracker + currentWord.search(currentKey) + 1] = currentKey;
                indexTracker = indexTracker + currentWord.search(currentKey) + 1;
                currentWord = currentWord.slice(currentWord.search(currentKey) + 1);
            }
            wordBlank = wordBlankArray.join('');
            document.getElementById('word').innerHTML = wordBlank;
        } else {
            triesLeft = triesLeft - 1;
            lettersGuessed = lettersGuessed.concat(keyStroke, ' ');
            document.getElementById('triesLeft').innerHTML = triesLeft;
            document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
        }
    },
    playGame: function() {
        while (true) {
            setWord(words)
            while (true) {
                keyStroke = ;
                testKeys(word, keyStroke)
                if (triesLeft === 0) {
                    alert("Woops! Try again!")
                    break
                }
                if (wordBlank === word) {
                    alert("Yay!!! You got it!")
                    break
                }
            }
        }
    }, 
};