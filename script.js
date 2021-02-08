const word = document.getElementById( 'word' );
const text = document.getElementById( 'text' );
const scoreEl = document.getElementById( 'score' );
const timeEl = document.getElementById( 'time' );
const endgameEl = document.getElementById( 'end-game' );
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

//Event listeners

text.addEventListener('input', e => {
  const insertedText = e.target.value;

  if(insertedText === randomWord) {
    addWordToDOM();
    updateScore();
    //Clear
    e.target.value = '';
  }
});