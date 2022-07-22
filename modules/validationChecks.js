//function to check all characters are either . , - or spaces
 const isMorse = (morse) =>
  morse.split("").every((char) => char == "." || char == "-" || char == " ");

  //function to check all characters are letters from a to z
  export const isText = (text)=>
  text.split("")
  .every((char) => (char.toLowerCase() >= "a" && char <= "z") || char == " ");

  export default isMorse;

  console.log(isMorse(""));