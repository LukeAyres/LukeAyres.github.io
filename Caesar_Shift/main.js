// ascii that are relevant: 65 -> 90

// const textbox_form    = document.getElementById("textbox_form");
const textbox         = document.getElementById("textbox");
const shifted_textbox = document.getElementById("shifted_textbox");
const shifter         = document.getElementById("shifter");
const shifter_value   = document.getElementById("shifter_value")


document.addEventListener("DOMContentLoaded", function(){
  // set label for shifter into correct position when page is loaded/relaoded
  shifter_value.innerHTML = shifter.value;
});

shifter.oninput = function() {
  // change the label for the shifter whenever user moves shifter
  shifter_value.innerHTML = this.value;
  // change shifted textbox whenever user moves shifter
  shifted_textbox.value = (caesarShift(textbox.value, parseInt(shifter.value)));
} 

textbox_form.oninput = function() {
  // change shifted textbox as user types or edits message
  shifted_textbox.value = (caesarShift(textbox.value, parseInt(shifter.value)));
}



function caesarShift(str, rot) {
  // turns str to uppercase to make things easier ie fewer relevant ascii
  let codedArr = str.toUpperCase().split("");
  let newArr = [];

  // holds the ascii of each passed character
  let asciiAt;

  for (let character in codedArr) {
    // charCodeAt expects an index which will always be zero as single characters are being dealt with
    asciiAt = codedArr[character].charCodeAt(0)
    if ( asciiAt >= 65 & asciiAt <= 90 ) {
      newArr.push(letterShift(asciiAt, rot));  
    } else {
      // leave punctuation, whitespace etc alone
      newArr.push(codedArr[character]);
    }
  }
  return newArr.join("");
}

function letterShift(ascii, rot) {
  // shifts ascii within restraints of 65 -> 90
  ascii += rot;
  if (ascii > 90) {
    return String.fromCharCode(64 + (ascii-90)); 
  }
  return String.fromCharCode(ascii);;
}

// console.log(
//   caesarShift("serr PBQR PNZC", 13)
// );

