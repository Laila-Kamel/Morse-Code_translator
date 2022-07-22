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

//function to translate a sentence from morse to english text
const TranslateFromMorseToEnglish = (morse) => {
  return morse
    .split("   ")
    .map((word) => wordTranslateFromMorseToEnglish(word)).join(" ")
    // .map((entry) => entry.map((x) => x[0]).join(""))
    // .join(" ");
};

//function that translates a word from morse to english text
export const wordTranslateFromMorseToEnglish = (word) => {
  try{
    return String(word.split(" ").map((char) => {
        return keyValuePairs.find((keyValuePair) =>char.toUpperCase() == keyValuePair[1]).filter((item,index)=>(index==0)).join("")
        //   return(keyValuePair[0]); ;
        ;
      })).replace(/[,]/g,"").toLocaleLowerCase();
  }
  catch {
    // text.value = "Cannot decode this character";
    throw new Error("Invalid Morse Character")
  }
};

export default TranslateFromMorseToEnglish;

// console.log(wordTranslateFromMorseToEnglish("....."));
