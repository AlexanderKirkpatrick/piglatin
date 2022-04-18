//attempt1

function pigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let pigArray = [];

  if (vowels.indexOf(str[0]) > -1) {
    newStr = str += "way";
  } else {
    let firstMatch = str.match(/[aeiou]/g) || 0;
    let vowel = str.indexOf(firstMatch[0]);
    newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
    }
    return newStr;
  };


//attempt2


function wordFeeder(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordFeed = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
      wordFeed++;
      pigLatin(element);
    });
}


function pigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let newStr = "";
if (vowels.indexOf(str[0]) > -1) {
    newStr = str += "way";
  } else {
    let firstMatch = str.match(/[aeiou]/g) || 0;
    let vowel = str.indexOf(firstMatch[0]);
    newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
  };
    return newStr;
}

//experiment

function pigLatinTranslator(elements) {
  let vowels = ["a", "e", "i", "o", "u"];
  let wordArray = [];
  const pigLatinStr = elements.split("");
  let pigLatin = "";

  if (vowels.includes(pigLatinStr[0])) {
    wordArray.push('way');
    for (let i = 0; i < pigLatinStr.length; i++) {
      pigLatin = pigLatinStr + pigLatin[i];
    }
    return pigLatin;
  } else {
    for (let i = 0; i < pigLatinStr; i++) {
      if ( (vowels.includes(pigLatinStr[i]))) {
        pigLatin = pigLatinStr.slice(i, pigLatinStr.length).concat(pigLatin).join('') + "ay";
        return pigLatin;
      } else {
        pigLatin = pigLatin.concat(pigLatinStr[i])
      }
    }
  }

}