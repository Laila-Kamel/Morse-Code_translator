import TranslateFromEnglishToMorse from "./englishToMorse.js";
import TranslateFromMorseToEnglish from "./morseToEnglish.js";

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
//function to check all characters are either . , - or spaces
export const isMorse = (morse) =>
  morse.split("").every((char) => char == "." || char == "-" || char == " ");

  //function to check all characters are letters from a to z
  export const isText = (text)=>
  text.split("")
  .every((char) => (char.toLowerCase() >= "a" && char <= "z") || char == " ");

translateBtn.addEventListener("click", () => {
//translate from text to morse
  if (text.value == "" && morse.value != "") {
    //try to decode
    try {
      //check if the morse values consists of . , - and spaces
      if (isMorse(morse.value)) {
        text.value = TranslateFromMorseToEnglish(morse.value).toLowerCase();
        console.log(text.value);
      } 
      //if the morse values are not . , - or spaces
      else text.value = "Please enter valid Morse Code characheters(. or -)";
    } 
    //of the morse values are . , - and spaces but don't exist in the code.
    //cannot decode the morse values
    catch {
      text.value = "Cannot decode this characters";
    }
  } 
  //translate from morse to text
  else if (text.value != "" && morse.value == "") {
    //check if values in the text are letters
    if (isText(text.value)) {
      console.log(TranslateFromEnglishToMorse(text.value));
      morse.value = TranslateFromEnglishToMorse(text.value).join("   ");
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
