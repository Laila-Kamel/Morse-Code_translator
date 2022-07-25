import TranslateFromEnglishToMorse from "./englishToMorse.js";
import TranslateFromMorseToEnglish from "./morseToEnglish.js";
import isMorse from "./validationChecks.js";
import { isText } from "./validationChecks.js";

let text = document.getElementById("textInput");
let morse = document.getElementById("morseInput");
const translateBtn = document.querySelector(".btn__button");


const code = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

translateBtn.addEventListener("click", () => {
//translate from morse to text
  if (text.value == "" && morse.value != "") {
    //try to decode
    // try {
      //check if the morse values consists of . , - and spaces
      try{
        if (isMorse(morse.value)) {
          text.value = TranslateFromMorseToEnglish(morse.value);
          console.log(text.value);
        }
       
      //if the morse values are not . , - or spaces
      else text.value = "Please enter valid Morse Code characters(. or -)";
    } 
    catch(e){
      text.value =e.message;
    }
  }

  //translate from text to morse
  else if (text.value != "" && morse.value == "") {
    //check if values in the text are letters
    if (isText(text.value)) {
      console.log(TranslateFromEnglishToMorse(text.value));
      morse.value = TranslateFromEnglishToMorse(text.value);
      console.log(morse.value);
    } 
    //if values are not letters or are mix of letters and other characters
    else morse.value = "Please enter a valid text.";
  } 
  //text and morse textarea are empty
  else if (text.value == "" && morse.value == "") {
    alert("Please enter values to decode");
  }
});
