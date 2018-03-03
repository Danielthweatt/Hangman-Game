'use strict';

// variables
const words = [['frodo', './assets/images/Elijah_Wood_as_Frodo_Baggins.png'], 
['samwise', './assets/images/6d370cb9e22da130dac7c794fbf2368a.gif'], 
['meriadoc', './assets/images/7824820.png'], 
['peregrin', './assets/images/v1J3W7w3-8043.jpg'], 
['gandalf', './assets/images/1-101222121109-lp.jpg'], 
['aragorn', './assets/images/Aragorn-in-The-Two-Towers-aragorn-34519327-419-425.jpg'], 
['gimli', './assets/images/14573-25242.gif'], 
['legolas', './assets/images/Legolas_-_in_Two_Towers.png'], 
['boromir', './assets/images/cftthfzgjsvnimu97z2w.jpg'], 
['sauron', './assets/images/Eye-of-Sauron,-Lord-of-the-Rings,-Return-of-the-King.jpg']];
let wins = 0;
let word;
let randomNumber;
let wordBlank;
let triesLeft;
let lettersGuessed;
let keyStroke;
let wordBlankArray;
let indexTracker;

// game object
const game = {
    // function to set up a new round with a random word
    setWord: function(wordsArray) {
        randomNumber = Math.floor(Math.random() * 10);
        word = wordsArray[randomNumber][0];
        wordBlank = '';
        triesLeft = 12;
        lettersGuessed = '';
        for (let i = word.length; i > 0; i--) {
            wordBlank = wordBlank.concat('_');
        }
        document.getElementById('secondHeader').innerHTML = '';
        document.getElementById('img').setAttribute('src', '')
        document.getElementById('word').innerHTML = wordBlank;
        document.getElementById('triesLeft').innerHTML = triesLeft;
        document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
    },
    // function to test key input and process it
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
    // main function that runs the game - will run indefinitely
    playGame: function() {
        game.setWord(words)
        document.onkeydown = function () {
            keyStroke = event.key;
            game.testKeys(word, keyStroke)
            if (triesLeft === 0) {
                document.onkeydown = function() {};
                setTimeout(function() {game.playGame()}, 5000)
            }   
            if (wordBlank.toLowerCase() === word) {
                document.onkeydown = function() {};
                document.getElementById('secondHeader').innerHTML = wordBlank;
                document.getElementById('img').setAttribute('src', words[randomNumber][1])
                wins = wins + 1;
                document.getElementById('wins').innerHTML = wins;
                setTimeout(function() {game.playGame()}, 5000)
            }
        }
    }
};

game.playGame()