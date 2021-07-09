let a = document.getElementById('question_word')


word_arr = [
  [ 'きれい', 'beautiful'],
  ['じょうず', 'good at'],
  ['へた', 'bad at'],
  ['げんき', 'well'],
  ['ひま', 'free'],
  ['とても', 'very'],
  ['あんまり', 'not very'],
  ['はし', 'chopsticks'],
  ['くつ', 'shoes' ],
  ['おしり', 'bum'],
  ['した', 'tongue'],
  ['れいとうこ', 'freezer'],
  ['れいぞうこ', 'fridge'],
  ['いもうと', 'younger sister'],
  ['おとうお', 'younger brother'],
  ['みずぎ', 'swimsuit'],
  ['おふる', 'bath'],
  ['にわ', 'garden'],
  ["ひこうき", 'plane'],
  ['いぞがしい', 'busy'],
  ['おきる', 'to awake'],
  ['ねる', 'to sleep'],
  ['あげまい', 'to give'],
  ['かいだん', 'stair'],
  ['としょかん', 'library'],
  ['サッカー', 'football'],
  ['トイレ', 'toilet'],
  ['おみゃげ', 'present'],
  ['かします', 'lend'],
  ['もらいます', 'recieve']
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],

];


let japan_to_eng = true
// gets list of english and japanese words
let japan_words = []; 
let eng_words = []
setUpWordArrays()
// length of dictionary
const num_words = japan_words.length
let currentWordIndex = 0;
// variables that store users score content
let rounds = 0
let correct = 0


setWord()
updateScore()

let form = document.getElementById("app_form");
// function called when user pushes enter
form.addEventListener("submit", function(event) {
  checkWord()
  event.preventDefault();
  // removes user input
  form.elements.app_input.value=""
  setWord()
  updateScore()
});


function setUpWordArrays(){
  for (w in word_arr){ 
    japan_words.push(word_arr[w][0])
    eng_words.push(word_arr[w][1])
  }  
}

function setWord() {
  // establishes current word to deduce
  let x = Math.floor(Math.random()*num_words)
  // while loop ensures words do not repeat straight away
  if (japan_to_eng){
    while (x===currentWordIndex){
      x = Math.floor(Math.random()*num_words)
    }
    currentWordIndex = x
    a.innerHTML = japan_words[currentWordIndex]

  } else {
    while (x===currentWordIndex){
      x = Math.floor(Math.random()*num_words)
    }
    currentWordIndex = x
    a.innerHTML = eng_words[currentWordIndex]
  }
  
}

function checkWord(){
  // check if attempt is correct
  let answer_correct = false
  let attempt = form.elements.app_input.value.toLowerCase()
  if (japan_to_eng) {
    if (eng_words[currentWordIndex] === attempt) {
      correct++
      answer_correct = true
    }

  } else {
    if (japan_words[currentWordIndex] === attempt) {
      correct++
      answer_correct = true
    }
  }
  showAnswer(answer_correct)
  rounds++
}

function updateScore() {
  document.getElementById("score").innerHTML= 'Score: ' + correct + '/' + rounds
}

function showAnswer(answer_correct){
  let aC = document.getElementById('answer_container');
  if (answer_correct) { 
    aC.innerHTML ="" 
  } else if (japan_to_eng) {
    aC.innerHTML = "the correct answer to " + japan_words[currentWordIndex] +  " was '"  + eng_words[currentWordIndex] + "'"
  }　else  {
    aC.innerHTML = "the correct answer to '" + eng_words[currentWordIndex] +  "' was "  + japan_words[currentWordIndex] 
  }
}

function resetGame() {
  rounds = 0
  correct = 0
  updateScore()
  setWord()
}


let changeForm = document.getElementById("change_form")
changeForm.addEventListener("submit", function(event){
  event.preventDefault();
  japan_to_eng = !japan_to_eng;
  resetGame()
})
document.getElementById('change_to_title').innerHTML = japan_to_eng ? 'Change to English Translation:' : 'Change to Japanese Translation:'