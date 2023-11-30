// return masked string
function maskify(cc) {
  let result = "";

  for (let i = 0; i < cc.length - 4; i++) {
    result += "#";
  }
  for (let i = cc.length - 4; i < cc.length; i++) {
    result += cc[i];
  }

  return result;
}



console.log(maskify("4556364607935616"));
