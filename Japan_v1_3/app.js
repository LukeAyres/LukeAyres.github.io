let a = document.getElementById('question_word')
// default is japan_to_eng_dict
japan_to_eng_dict = {
  きれい: 'beautiful',
  じょうず: 'good at',
  へた: 'bad at',
  げんき: 'well',
  ひま: 'free',
  とても: 'very',
  あんまり: 'not very',
  はし: 'chopsticks',
  くつ: 'shoes' 
}
eng_to_japan_dict = {
  'beautiful': 'きれい',
  'good at': 'じょうず' ,
  'bad at': 'へた',
  'well': 'げんき',
  'free': 'ひま' ,
  'very':'とても',
  'not very': 'あんまり',
  'chopsticks': 'はし' ,
  'shoes': 'くつ' 
}


let current_dict = japan_to_eng_dict
let japan_to_eng = true
// gets keys of dictionary
let words_list = Object.keys(current_dict)
// length of dictionary
const num_words = words_list.length
let currentWord;
// variables that store users score content
let rounds = 0
let correct = 0



setWord()


let form = document.getElementById("app_form");
// function called when user pushes enter
form.addEventListener("submit", function(event) {
  // check if attempt is correct
  if (current_dict[currentWord] === (form.elements.app_input.value)) {
    correct++
  } 
  rounds++
  event.preventDefault();
  // removes user input
  form.elements.app_input.value=""
  setWord()
  updateScore()
});


function setWord() {
  // establishes current word to deduce
  let x = Math.floor(Math.random()*num_words)
  // while loop ensures words do not repeat straight away
  while (words_list[x]===currentWord){
    x = Math.floor(Math.random()*num_words)
  }
  currentWord = words_list[x] 
  a.innerHTML = currentWord
}

function updateScore() {
  document.getElementById("score").innerHTML= 'Score: ' + correct + '/' + rounds
}

function resetGame() {
  rounds = 0
  correct = 0
  updateScore()
  if(japan_to_eng === true){
    current_dict = japan_to_eng_dict 
  } else {
    current_dict = eng_to_japan_dict
  }
  words_list = Object.keys(current_dict)
  setWord()
}


let changeForm = document.getElementById("change_form")
changeForm.addEventListener("submit", function(event){
  event.preventDefault();
  japan_to_eng = !japan_to_eng;
  resetGame()
})
document.getElementById('change_to_title').innerHTML = japan_to_eng ? 'Change to English Translation:' : 'Change to Japanese Translation:'