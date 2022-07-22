import { isMorse } from "./script";
import { isText } from "./script";
import { wordTranslateFromEnglishToMorse } from "./englishToMorse";
import { wordTranslateFromMorseToEnglish } from "./morseToEnglish";
import { TranslateFromEnglishToMorse} from "./englishToMorse";
import { TranslateFromMorseToEnglish} from "./morseToEnglish";

descibe("test cases for a function that checks all character in a text is either . or - or space",()=>{
    it("should return true if all characters are either . or - or space",()=>{
        expect(isMorse(".... -")).toBe(true);
        expect(isMorse(".... a")).toBe(false);
        expect(isMorse("I am a text")).toBe(false);
        expect(isMorse("")).toBe(false);
    })
})
