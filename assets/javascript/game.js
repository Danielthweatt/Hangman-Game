'use strict';

let wins = 0;
let words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
let triesLeft = 12;
let word = '';
let key = '';

const game = {
    setWord: function(param) {
        word = words[Math.floor(Math.random() *10)];
        let wordBlank = "_";
        for (let i = word.length; i > 1; i--) {
            wordBlank = wordBlank.concat(" _");
        }
        document.getElementById("word").innerHTML = wordBlank;
        return word;
    },
    testKeys: function(param1, param2) {

    },
    playGame: function() {

    }, 
};

game.playGame();