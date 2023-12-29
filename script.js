


 const letterDiv = document.getElementsByClassName('letter');
 const letterIinputSec = document.getElementsByClassName('letter-input-sec');
 const hintDiv= document.getElementsByClassName('hint');
 const hiddenNotification = document.getElementsByClassName('hidden-notification');
 const winText = document.getElementsByClassName('win-text');
 const notificationSpan = document.getElementsByClassName('notification-span');
 const newGameButton = document.getElementsByClassName('new-game-button');

 let answer = '';
 let wrongChoice = 0;
 let mistake = 5;
 let lettersGuessed =[];

 let sportsArray = new Map(['Kobe',
 'Lebron',
 'Prescott',
 'Shaq',
 'Emmit']);

 
