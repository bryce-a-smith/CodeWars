// return masked string
function maskify(cc) {
  let result = "";

  //Loop through string adding #'s to result string
  for (let i = 0; i < cc.length - 4; i++) {
    result += "#";
  }
  //Add remaining 4 characters.
  for (let i = cc.length - 4; i < cc.length; i++) {
    result += cc[i];
  }

  return result;
}

console.log(maskify("4556364607935616"));
