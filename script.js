


 //athletes along with hints array

const wordsWithHints = [{word:'KOBE',hint: 'A former Lakers great shooting guard of the NBA.'},
                        {word:'LEBRON',hint: 'The NBA all time leading scorer.'},
                        {word:'PRESCOTT', hint:'NFL quarterback of the Cowboys.'},
                        {word:'SHAQ', hint: 'A former NBA dominant center of the Lakers.'},
                        {word:'OHTANI',hint: 'A MLB plyer, just signed $700 million contract.'}];


//initializing hanman drawing
//let hangmnParts = []
 
 let selectedWordInfo = wordsWithHints[Math.floor(Math.random() * wordsWithHints.length)];
 let selectedWord = selectedWordInfo.word;
 let wordHint = selectedWordInfo.hint;
 let remainingGuesses = 5;
 let guessedLetters = [];
 let wordDisplay = document.getElementById('wordDisplay');
 let guessesLeft =document.getElementById('guessesLeft');
 let letterButtons = document.getElementById('letterButtons');

//function to display word
 function displayWord() {
  let wordHTML ='';
  for (let letter of selectedWord) {
    if (guessedLetters.includes(letter)) {
      wordHTML += `<span>${letter}</span>`;
    } else{
       wordHTML +='<span>_</span>';
    }
   }
   wordDisplay.innerHTML = wordHTML;
}


// function to display guessed letter

function displayGuessedLetters(){
  letterButtons.innerHTML = '';
   for (let i = 65; i <= 90; i++){
    let letter = String.fromCharCode(i);
    let button =  document.createElement('button');
    button.textContent = letter;
    button.onclick = function() {
    checkLetter(letter);
    button.disabled = true;
  };
letterButtons.appendChild(button);
 }
}

// function takes in guessed letter as an argument. Checks to see if the slected word being
// guessed contains the guessed letter.
function checkLetter(letter){
  if(selectedWord.includes(letter)) {
   guessedLetters.push(letter);// if leeter is correct it is pushed in guessed leteer array
} else {
     remainingGuesses--;  // if guessed letter incorrect it decrements the remainingGuesses counter
    }
    displayWord();
    displayGuessesLeft();
    checkGameStatus();
}

 function displayGuessesLeft(){
    guessesLeft.textContent = remainingGuesses;
}


// function to check and display Win or Lose
function checkGameStatus() {
     if (remainingGuesses === 0) {
        endGame('Game Over! You Lose! The word was: ' + selectedWord);
    } else if(!wordDisplay.textContent.includes('_')) {
       endGame('Congrats! You guessed the right athlete: ' + selectedWord);
    }

}
// function end game 
function endGame(message) {
   alert(message);
   resetGame();

}

//reset game function along with hint

function resetGame(){
selectedWordInfo = wordsWithHints[Math.floor(Math.random() *wordsWithHints.length)];
selectedWord = selectedWordInfo.word;
wordHint = selectedWordInfo.hint;
remainingGuesses = 5;
guessedLetters = [];
displayWord();
displayGuessesLeft();
displayGuessedLetters();
alert('Hint:' + wordHint);// display hint  when game is reset
}

//Initializing the game
displayWord();
displayGuessesLeft();
displayGuessedLetters();
alert('Hint:' + wordHint);


 


