


 //Athletes' Names to be guessed ( with hints ) array

const wordsWithHints = [{word:'KOBE',hint:'   Former Lakers great shooting guard of the NBA.'},
                        {word:'LEBRON',hint:'  The NBA all time leading scorer.'},
                        {word:'PRESCOTT',hint:'  NFL quarterback of the Cowboys.'},
                        {word:'SHAQ', hint: '   Former NBA dominant center of the Lakers.'},
                        {word:'OHTANI',hint: '   MLB plyer, just signed $700 million contract.'},
                        {word:'BRADY', hint: '  Ex Patriots QB of NFL'},
                        {word:'JUDD', hint:  '  Current NY Yankees homerun hitter'},
                        {word:'MAHOMES', hint: '  Currnet NFL QB of KC Chiefs'}];
                 
 
 let selectedWordInfo = wordsWithHints[Math.floor(Math.random() * wordsWithHints.length)];//Math.floor method returns greatest interger 
 //less than or equal to argument....Math.random returns random number in wordHints array
 let selectedWord = selectedWordInfo.word;
 let wordHint = selectedWordInfo.hint;
 let remainingGuesses = 6;
 let guessedLetters = [];
 let wordDisplay = document.getElementById('wordDisplay');
 let guessesLeft =document.getElementById('guessesLeft');
 let letterButtons = document.getElementById('letterButtons');

//function to display word
 function displayWord() {
  let wordHTML ='';
  for (let letter of selectedWord) {
    if (guessedLetters.includes(letter)) {//checks whether guessed letter is included in selected word
      wordHTML += `<span>${letter}</span>`;//places the value of letter directly into the string
    } else {
       wordHTML += '<span>_</span>';// displays the underlined values of each letter
    }
   }
   wordDisplay.innerHTML = wordHTML;//displays word from the element property
}

// function to display guessed letter

function displayGuessedLetters(){
  letterButtons.innerHTML = '';
   for (let i = 65; i <= 90; i++){// capital letters from A to Z
    let letter = String.fromCharCode(i);//returns the letter in the alphabet
    let button =  document.createElement('button');  //creates a html button in js
    button.textContent = letter;
    button.onclick = function() {//event hamdler button for function  when clicked
    checkLetter(letter);
    button.disabled = true;
   
  };
letterButtons.appendChild(button);//button becomes a new child of letterButtons (part of alphabets  displayed)
console.log(button);
 }

}

// function takes in guessed letter as an argument. Checks to see if the slected word being
// guessed contains a correct letter.
function checkLetter(letter){
  if(selectedWord.includes(letter)) {
   guessedLetters.push(letter);// if letter is correct it is pushed in guessed letter array
} else {
     remainingGuesses--;  // if guessed letter incorrect it decrements(--) the remainingGuesses counter
    }
    displayWord();
    displayGuessesLeft();
    checkGameStatus();
}


 function displayGuessesLeft(){
    guessesLeft.textContent = remainingGuesses;
    console.log(remainingGuesses);
}


// function to check and display Win or Lose
function checkGameStatus() {
     if (remainingGuesses === 0) {// checks for remaining guesses.. if remaining guesses = 0, executes endgame function resulting in an unsucessful game.
        endGame('Game Over! You Lose! The word was: ' + selectedWord);
    } else if(!wordDisplay.textContent.includes('_')) {///checks to see if underscore is included, if underscore is not included it executes the endgame function for a sucessful game
       endGame('Congrats! You guessed the right athlete: ' + selectedWord);
    }

}
// function end game 
function endGame(message) {
   alert(message);
  // resetGame();
}

//reset game function along with hint

function resetGame(){
selectedWordInfo = wordsWithHints[Math.floor(Math.random() *wordsWithHints.length)];
selectedWord = selectedWordInfo.word;
wordHint = selectedWordInfo.hint;
remainingGuesses = 6;
guessedLetters = [];
displayWord();
displayGuessesLeft();
displayGuessedLetters();
alert('Hint:' + wordHint);// display hint  when game is reset

}
resetGame();






 


