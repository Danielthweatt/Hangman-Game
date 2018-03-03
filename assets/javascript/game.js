'use strict';

const words = ['frodo', 'samwise', 'meriadoc', 'peregrin', 'gandalf', 'aragorn', 'gimli', 'legolas', 'boromir', 'sauron'];
let wins = 0;
let word;
let randomNumber;
let wordBlank;
let triesLeft;
let lettersGuessed;
let keyStroke;
let wordBlankArray;
let indexTracker;

const game = {
    setWord: function(wordsArray) {
        randomNumber = Math.floor(Math.random() * 10);
        word = wordsArray[randomNumber];
        wordBlank = '';
        triesLeft = 12;
        lettersGuessed = '';
        for (let i = word.length; i > 0; i--) {
            wordBlank = wordBlank.concat('_');
        }
        document.getElementById('word').innerHTML = wordBlank;
        document.getElementById('triesLeft').innerHTML = triesLeft;
        document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
    },
    testKeys: function (currentWord, currentKey) {
        if (currentWord.search(currentKey) >= 0 && wordBlank.search(currentKey) < 0) {
            wordBlankArray = wordBlank.split('');
            if (currentWord.search(currentKey) === 0) {
                wordBlankArray[0] = currentKey.toUpperCase();
            } else {
                wordBlankArray[currentWord.search(currentKey)] = currentKey;
            }
            indexTracker = currentWord.search(currentKey);
            currentWord = currentWord.slice(currentWord.search(currentKey) + 1);
            while (currentWord.search(currentKey) >= 0) {
                wordBlankArray[indexTracker + currentWord.search(currentKey) + 1] = currentKey;
                indexTracker = indexTracker + currentWord.search(currentKey) + 1;
                currentWord = currentWord.slice(currentWord.search(currentKey) + 1);
            }
            wordBlank = wordBlankArray.join('');
            document.getElementById('word').innerHTML = wordBlank;
        } else if (lettersGuessed.search(currentKey) < 0 && wordBlank.search(currentKey) < 0) {
            lettersGuessed = lettersGuessed.concat(currentKey, ' ');
            document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
            triesLeft = triesLeft - 1;
            document.getElementById('triesLeft').innerHTML = triesLeft;
        }
    },
    playGame: function() {
        game.setWord(words)
        document.onkeydown = function () {
            keyStroke = event.key;
            game.testKeys(word, keyStroke)
            if (triesLeft === 0) {
                document.onkeydown = function() {};
                setTimeout(function() {game.playGame()}, 1500)
            }   
            if (wordBlank.toLowerCase() === word) {
                document.onkeydown = function() {};
                document.getElementById('secondHeader').innerHTML = wordBlank;
                wins = wins + 1;
                document.getElementById('wins').innerHTML = wins;
                setTimeout(function() {game.playGame()}, 1500)
            }
        }
    }
};

game.playGame()