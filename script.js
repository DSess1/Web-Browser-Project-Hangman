


  //array of Athletes' names  and hints 

const namesWithHints = [
  {name:'KOBE',hint:'   Former Lakers great shooting guard of the NBA.'},
  {name:'LEBRON',hint:'  The NBA all time leading scorer.'},
  {name:'PRESCOTT',hint:'  NFL quarterback of the Cowboys.'},
  {name:'SHAQ', hint: '   Former NBA dominant center of the Lakers.'},
  {name:'OHTANI',hint: '   MLB plyer, just signed $700 million contract.'},
  {name:'BRADY', hint: '  Ex Patriots QB of NFL, has the most Superbowl rings.. '},
  {name:'JUDD', hint:  '  Current NY Yankees homerun hitter'},
  {name:'MAHOMES', hint:'  Currnet NFL QB of KC Chiefs'},
  {name:'LAMB' , hint: '  Currnet Wide Receiver of the Cowboys'},
  {name:'JORDAN', hint:'   Often called the Geatest NBA player of All Time'},
  {name:'BURROW', hint:'   NFL Quarterback of Cincinatti Bengals'},
  {name:'HILL', hint:'     NFLs fastest Wide receiver, plays for Miami Dolphins'},
  {name:'BONDS', hint:'    MLB all time homerun leader '},
  {name:'PARSONS', hint:'   NFL, Linebacker of Cowboys'}];
                 
 
 let selectedNameInfo = namesWithHints[Math.floor(Math.random() * namesWithHints.length)];// returns random name in nameWithHints array
 let {name: selectedName, hint: nameHint } = selectedNameInfo;                              
 let remainingGuesses = 6;       //number of lives
 let guessedLetters = [];
 let nameDisplay = document.getElementById('nameDisplay');
 let guessesLeft =document.getElementById('guessesLeft');
 let letterButtons = document.getElementById('letterButtons');

 



//function  displays letters of the Athletes'name, or an Underscore

  const displayName = () => {
  let nameHTML ='';
  for (let letter of selectedName) {
    if (guessedLetters.includes(letter)) {//checks whether guessed letter is included in selected Name
      nameHTML += `<span>${letter}</span>`;//places the letter directly into the string in place of the underscore  (code from youTube Codepiep, CodingArtist)
    } else {
      nameHTML += '<span>_</span>';// displays the underscore
    }
   }    
    nameDisplay.innerHTML = nameHTML;// old html content in nameDisplay replaced by new content in nameHTML  
}

// function to creates Keybord buttons(Capital letters fro A to Z)   

const displayGuessedLetters = ()  => {
   letterButtons.innerHTML = '';
   for (let i = 65; i <= 90; i++){                   // capital letters from A to Z using ASCII characters(code from CodingNepal)
    let letter = String.fromCharCode(i);             // turns ASCII character into letter(Ccode from CodingNepal, Devresion) 
    let button =  document.createElement('button');  //creates  button in js
    button.textContent = letter;                     // Contenet  displayed in button is updated with variable stored in letter (code from CodingArtist))
    button.onclick = () => {                         // onclick event handler button for function  checkLetter
    checkLetter(letter);
    button.disabled = true;                           //keeps you from using the same letter more than one
   
  };
letterButtons.appendChild(button);                    //button becomes  child of letterButtons content for last button making it visible
console.log(button);
 }

}

// function takes in a guessed letter as an argument. Checks to see if the slected word being
// guessed contains a correct letter.

const checkLetter = (letter)  => {
  if(selectedName.includes(letter)) {
   guessedLetters.push(letter);// if letter is correct it is pushed in guessedLetters array 
} else {
     remainingGuesses--;  // if guessed letter incorrect it decrements(--) the remainingGuesses(remaining lives) counter
    }
    displayName();
    displayGuessesLeft();
    checkGameStatus();
  
}

// function displays the ramaining guesses(lives) that you have left

 const displayGuessesLeft = () => {
  guessesLeft.textContent = remainingGuesses;//updates guessesLeft  into remainingGuesses(lives left)
  console.log(remainingGuesses);
}


// function to check and display Win or Lose

const checkGameStatus = () => {
     if (remainingGuesses === 0) {                       // checks for remaining guesses.. if remaining guesses = 0(# of lives), executes endgame function resulting in an unsucessful game.
        endGame('Game Over! You Lose! The  correct Name was: ' + selectedName);
    } else if(!nameDisplay.textContent.includes('_')) {    //checks to see if underscore is included, if underscore is not included it executes the endgame function for a sucessful gameCode from devresion)
       endGame('Congrats! You guessed the right athlete: ' + selectedName);
    }

}
// function for end of game 

const endGame = (message) => {
   setTimeout( () => window.alert(message), 500);  // displays alert message in browser with 'OK' button.. pauses game until clicked..
                                                   // added setTimeout to delay alert message from poppin up before nomber of livew
                                                   // reached 0. (code from chatGPT.)
  
}

//reset game function 

const resetGame = () => {
selectedNameInfo = namesWithHints[Math.floor(Math.random() *namesWithHints.length)];    //gets random name again upon reset
selectedName = selectedNameInfo.name;
nameHint = selectedNameInfo.hint;
remainingGuesses = 6;
guessedLetters = [];                                    
displayName();                                        //shows all underscores  upon reset
displayGuessesLeft();                                
displayGuessedLetters();                              // displays all Capital letters upon reset
alert('Hint:' + nameHint);// display hint only ..pauses game until OK button is clicked
playBackgroundMusic();

}
  //initialization of Game
  resetGame();
  








 


