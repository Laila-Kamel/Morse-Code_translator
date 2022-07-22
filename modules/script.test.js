import isMorse from "./validationChecks";
import { isText } from "./validationChecks";
import { wordTranslateFromEnglishToMorse } from "./englishToMorse";
import { wordTranslateFromMorseToEnglish } from "./morseToEnglish";
import TranslateFromEnglishToMorse from "./englishToMorse";
import TranslateFromMorseToEnglish from "./morseToEnglish";
const invalidMorseCharacterErrorType="Invalid Morse Character";

describe("test cases for a function that checks all character in a morse text is either . or - or space", () => {
  it("should return true if all characters are either . or - or space", () => {
    expect(isMorse(".... -")).toBe(true);
    expect(isMorse(".-.. -   -..")).toBe(true);
    expect(isMorse(".... a")).toBe(false);
    expect(isMorse("I am a text")).toBe(false);
  });
});

describe("test cases for a function that checks all characters in a text are either letters from a to z or space", () => {
  it("should return true if all characters are either letters from a to z(upper case or lower case) or space", () => {
    expect(isText("HELLO THERE")).toBe(true);
    expect(isText("how are you")).toBe(true);
    expect(isText("hOpE YoUr ArE FiNe")).toBe(true);
    expect(isText("1234 56")).toBe(false);
    expect(isText("iam g8ful")).toBe(false);
    expect(isText("$%^special characters")).toBe(false);
  });
});

describe("test cases for a function that converts a word from morse code to plain english text", () => {
  it("should return an english word correspondent to the word written in Morse code", () => {
    expect(wordTranslateFromMorseToEnglish(".... ..")).toBe("hi");
    expect(wordTranslateFromMorseToEnglish(".-- --- .-. -..")).toBe("word");
    expect(wordTranslateFromMorseToEnglish(".... . .-.. .-.. ---")).toBe(
      "hello"
    );
    expect(wordTranslateFromMorseToEnglish("..")).toBe("i");
  });

  it("should throw an error if a Morse letter doesn't have an english correspondent word", () => {
    expect(()=>wordTranslateFromMorseToEnglish(".....")).toThrowError(invalidMorseCharacterErrorType);
   
  });
});

describe("test cases for a function that converts a sentence from morse code to plain english text", () => {
    it("should return an english sentence correspondent to the sentence written in Morse code", () => {
      expect(TranslateFromEnglishToMorse("hello world")).toBe(".... . .-.. .-.. ---   .-- --- .-. .-.. -..");
      expect(TranslateFromEnglishToMorse("HELLO WORLD")).toBe(".... . .-.. .-.. ---   .-- --- .-. .-.. -..");
      expect(TranslateFromEnglishToMorse("hello")).toBe(".... . .-.. .-.. ---"
      );
      expect(TranslateFromEnglishToMorse("Hi TheRe")).toBe(".... ..   - .... . .-. .");
    });
  });
  

describe("test cases for a function that converts a word plain in english text to morse code", () => {
  it("should return a Morse word correspondent to the english word", () => {
    expect(wordTranslateFromEnglishToMorse("HI")).toBe(".... ..");
    expect(wordTranslateFromEnglishToMorse("word")).toBe(".-- --- .-. -..");
    expect(wordTranslateFromEnglishToMorse("HeLLo")).toBe(
      ".... . .-.. .-.. ---"
    );
    expect(wordTranslateFromEnglishToMorse("I")).toBe("..");
  });
});


describe("test cases for a function that converts a sentence plain in english text to morse code sentence", () => {
    it("should return a Morse sentence correspondent to the english sentence", () => {
      expect(TranslateFromMorseToEnglish("... - .- .-. -   -- -.--   -.-. .- .-. . . .-.")).toBe("start my career");
      expect(TranslateFromMorseToEnglish(".. -   .. ...   .-   ... ..- -. -. -.--   -.. .- -.--")).toBe("it is a sunny day");
      expect(TranslateFromMorseToEnglish(".... . .-.. .-.. ---")).toBe(
        "hello"
      );
    //   it("should throw an error if a word in the Morse sentence includes a letter that doesn't have an english correspondent", () => {
    //     expect(()=>TranslateFromMorseToEnglish(".... ----------")).toThrowError(invalidMorseCharacterErrorType);
       
    //   });
    });
  });