const word = document.getElementById( 'word' );
const text = document.getElementById( 'text' );
const scoreEl = document.getElementById( 'score' );
const timeEl = document.getElementById( 'time' );
const endgameEl = document.getElementById( 'end-game-container' );
const settingsBtn = document.getElementById( 'settings-btn' );
const settings = document.getElementById( 'settings' );
const settingsForm = document.getElementById( 'settings-form' );
const difficultySelect = document.getElementById( 'difficulty' );

//List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'bell',
  'pies',
  'parts',
  'juice',
  'warlike',
  'bad',
  'north',
  'south',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'flutes',
  'friendship',
  'kin',
  'superficial',
  'quince',
  'eight',
  'ate',
  'axed',
  'feeble',
  'admit',
  'drag',
  'loving',
  'rapture',
  'skull',
  'righteous',
  'reckless',
  'habitual',
  'baggage',
  'brag',
  'boast',
  'clout',
  'helicopter',
  'space',
  'jarring',
  'jam',
  'factual',
  'fax',
  'phone',
  'connect',
  'connection',
  'height',
  'width',
  'mountain',
  'rolling',
  'speed',
  'tester',
  'establishment',
  'mugshot',
  'lyricist',
  'cunning',
  'completed',
  'finally',
  'Finland',
  'unbelievable',
  'scorching',
  'blazed',
  'hypertension',
  'skillful',
  'linguistic',
  'focussed',
  'wallpaper',
  'canvas',
  'windows',
  'chalk',
  'outline',
  'border',
  'cryptic',
  'scriptures',
  'philosophy',
  'universe',
  'galaxy',
  'cheat',
  'hustled',
  'mingling',
  'breakfast',
  'dinner',
  'interception',
  'deceit',
  'belief',
  'faith',
  'structure',
  'sculpture',
  'misspell',
  'pharoah',
  'weird',
  'intelligence',
  'pronunciation',
  'handkerchief',
  'iogorrhea',
  'chiaroscurist',
  'pseudopseudohypoparathyroidism',
  'antidisestablishmentarianism' 
];


//Init word
let randomWord;

//Init Score
let score = 0;

//Init time
let time =10;

// Set difficulty to value in localstorage or medium
let difficulty = localStorage.getItem('difficulty') !== null ?
localStorage.getItem('difficulty') : 'medium';

//Set difficulty select value
difficultySelect.value = 
localStorage.getItem('difficulty') !== null ?
localStorage.getItem('difficulty') : 'medium';

//Focus on text on start
text.focus();

//Start counting down
const timeInterval = setInterval(updateTime, 1000);

//Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

addWordToDOM();

//Update score
function updateScore() {
  score++;
  // alert(score);
  // console.log(score);
  scoreEl.innerHTML = score;
}

//Update Time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if(time === 0) {
    clearInterval(timeInterval);
    //end game
    gameOver();
  }
}

//Game Over, Show End Screen
function gameOver() {
  endgameEl.innerHTML = `
  <h1>Time Ran Out</h1>
<p>Your Final Score Is ${score}</p>
<button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = 'flex';
}

//Event listeners

let i = 0;
//Typing
text.addEventListener('input', e => {
  const insertedText = e.target.value;
  // if(randomWord.charAt(i) == insertedText.charAt(i)) {
  //   alert('green');
  // } else {
  //   alert('red');
  // }
  // alert(randomWord.charAt(++i));
  i++;
  if(insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    
    //Clear
    e.target.value = '';

    if(difficulty === 'hard'){
      time += 2;
    } else if(difficulty === 'medium') {
      time += 3;
    } else if(difficulty === 'easy') {
      time += 5;
    }

    updateTime();
  }
});

//Settings btn click
settingsBtn.addEventListener('click', () => 
settings.classList.toggle('hide'));

//Settings select
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});