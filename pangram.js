/**
 * Determine if a sentence is a pangram.
 * @param  {String} wordToCheck The Word we are checking
 * @return {Boolean} True if the word is a pangram, false if not
 */
export const isPangram = (wordToCheck) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let missingLetters = [];
  let regex = /\s/g;

  try {
    let lowerCaseNoSpaces = wordToCheck.toLowerCase().replace(regex, "");

    alphabet
      .toLowerCase()
      .split("")
      .sort()
      .forEach((letter) => {
        if (lowerCaseNoSpaces.indexOf(letter) === -1) {
          missingLetters.push(letter);
        }
      });
      
  } catch {
    return false;
  }

  return missingLetters.length >> 0 ? false : true;
};
