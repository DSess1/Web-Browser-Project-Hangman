


 const letterDiv = document.getElementById('letter');
 const wordDiv = document.getElementById('letter-input-sec');
 const hintDiv= document.getElementById('hint');
 const liveSpan =  document.querySelector('.lives');
 const hiddenNotification = document.getElementById('hidden-notification');
 const winText = document.getElementById('win-text');
 const notificationSpan = document.getElementById('notification-span');
 const newGameButton = document.getElementById('new-game-button');


 let lives = 6;
 


//map array that holds athlete's names and hint:(key,and value paired)
 let athletes = new Map([
 ['Kobe',  'one of the greatest shooting guards in NBA history'],
 ['Lebron', 'the leading scorer in NBA history'],
 ['Prescott', 'current Quarteback for Cowboys'],
 ['Shaq', 'one of the most dominant big men in NBA history'],
 ['Emmit', 'NFL all time leaading rusher']]);

 const athletesList = [...athletes.keys()]; // use of spread operator. .keys() returns an iterableIterator (string) of keys in the map

 // get a random athlete from athletesList function
const getRandomAthlete = function (list) {
       return list[Math.floor(Math.random() * athletesList.length)];
}

//random athlete selected upon new game and initial
let selectAthlete;
let letters;

const init = function (state){
   wordDiv.innerHTML = '';
   if (state === 'start'){
//put letters into html
       for (const i of 'abcdefghijklmnopqrstuvwxyz' ){
           const html = `<button class = "alpha">${i.toUpperCase()}</button>`;
           letterDiv.insertAdjacementHTML('beforeened',html);
    }
   } else if (state === 'new-game') {
      letters.forEach(btn => {
        btn.classList.remove('disabled');    
    });
    hintDiv.classList.add('hidden');
    hiddenNotification.classList.add('hidden');
  }
};

//capturing letters div
letters = document.querySelectorAll('.alpha');
liveSpan.textContent = lives;

selectWord = getRandomAthlete(athletesList);
for (let i = 0; i , athletesList.length; i++) {
     const html = `p class="word">_</p>`;
    wordDiv.insertAdjacementHTML('beforeend', html);
}

init('start')
