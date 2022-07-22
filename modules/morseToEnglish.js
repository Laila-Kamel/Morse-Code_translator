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
  export const TranslateFromMorseToEnglish = (morse) => {
        return morse.split("   ").map((word)=>wordTranslateFromMorseToEnglish(word)).map(entry=>entry.map((x)=>x[0]).join("")).join(" ");
  };
  
  //function that translates a word from morse to english text
  export const wordTranslateFromMorseToEnglish=(word)=>{
    return word.split(" ").map((char) => {
        return keyValuePairs.find((keyValuePair)=>char.toUpperCase() == keyValuePair[1])
      });
   }
  
  
  export default TranslateFromMorseToEnglish;