function removeDuplicateWords(s) {
  // your perfect code...
  arr = s.split(" ");
  newArr = [arr[0]];

  for (word of arr) {
    if (!newArr.includes(word)) {
      newArr.push(word);
    }
  }

  str = "";
  for (word of newArr) {
    str += word + " ";
  }

  return str.trim();
}

console.log(removeDuplicateWords("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));

