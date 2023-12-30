


 

const words = ['KOBE', 'LEBRON', 'PRESCOTT', 'SHAQ', 'OHTANI'];

let hangmnParts = []
 
 let selectedWord = words[Math.floor(Math.random() * words.length)];
 let remainingGuesses = 5;
 let guessedLetters = [];
 let wordDisplay = document.getElementById('wordDisplay');
 let guessesLeft =document.getElementById('guessesLeft');
 let letterButtons = document.getElementById('letterButtons');


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
function checkLetter(letter){
  if(selectedWord.includes(letter)) {
   guessedLetters.push(letter);
} else {
     remainingGuesses--;
    }
    displayWord();
    displayGuessesLeft();
    checkGameStatus();
}

 function displayGuessesLeft(){
    guessesLeft.textContent = remainingGuesses;
}

function checkGameStatus() {
     if (remainingGuesses === 0) {
        endGame('Game Over! You Lose! The word was: ' + selectedWord);
    } else if(!wordDisplay.textContent.includes('_')) {
       endGame('Congrats! You guessed the right athlete: ' + selectedWord);
    }

}

function endGame(message) {
   alert(message);
   resetGame();

}

function resetGame(){
selectedWord = words[Math.floor(Math.random() *words.length)];
remainingGuesses = 5;
guessedLetters = [];
displayWord();
displayGuessesLeft();
displayGuessedLetters();
}

//Initializing the game
displayWord();
displayGuessesLeft();
displayGuessedLetters();


 


