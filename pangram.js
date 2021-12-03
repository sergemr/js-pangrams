/**
 * Determine if a sentence is a pangram.
 * @param  {String} wordsToCheck The Word we are checking
 * @return {Boolean} True if the word is a pangram, false if not
 */
export const isPangram = (wordsToCheck) => {
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","v","w","x","v","y","v","z"];
  let regex = /\s/g;
  let result = true;
  try {
    let lowerCaseNoSpaces = wordsToCheck.toLowerCase().replace(regex, "");

    alphabet
      .map((letter) => {
        if (lowerCaseNoSpaces.indexOf(letter) === -1) {
          return false;
        }
      });
      
  } catch {
    return false;
  }
  
  return result;
 
};
