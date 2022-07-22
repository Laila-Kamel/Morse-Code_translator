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

const keyValuePairs = Object.entries(code);

//function to translate a sentence from english text to morse
 const TranslateFromEnglishToMorse = (text) => {
    return text.split(" ").map((word)=>wordTranslateFromEnglishToMorse(word)).join("   ")
};

//function to translate a wrod from english text to morse
export const wordTranslateFromEnglishToMorse=(word)=>{
   return String(word.split("").map((char) => {
    return keyValuePairs.find((keyValuePair)=>char.toUpperCase() == keyValuePair[0]).filter((item,index)=>(index==1)).join("")
  })).replace(/[,]/g," ").toLocaleLowerCase();
}

export default TranslateFromEnglishToMorse;