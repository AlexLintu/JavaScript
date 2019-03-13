// 1. const MessageMixer = require('./message-mixer.js');
// 2. import MessageMixer from './message-mixer.js';

import { countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode, palindrome, pigLatin } from './message-mixer.js';

function displayMessage() {
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(reverseWord("What is the color of the sky?"));
  console.log(reverseAllWords("What is the color of the sky?"));
  console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(encode("What is the color of the sky?"));
  console.log(palindrome("What is the color of the sky?")); // What is the color of the sky? ?yks eht fo roloc eht si tahW
  console.log(pigLatin("What is the color of the sky?", 't')); // Whattistthetcolortoftthetsky?

}

displayMessage();