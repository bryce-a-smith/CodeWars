function addLetters(...letters) {
  //Check case for empty array.
  if (letters.length == 0) {
    return "z";
  }

  //Declare array of alphabet letters with index as associated numeric value.
  let alphabet = [
    ,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let total = 0;

  //Add numeric values to find appropriate index.
  for (letter of letters) {
    for (let i = 1; i < alphabet.length; i++) {
      if (letter == alphabet[i]) {
        total += i;
      }
    }
  }

  //Wrap to beginning of alphabet.
  while (total > 26) {
    total -= 26;
  }

  return alphabet[total];
}
