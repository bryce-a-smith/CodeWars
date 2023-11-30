// // return masked string
// function maskify(cc) {
//   let result = "";

//   //Loop through string adding #'s to result string
//   for (let i = 0; i < cc.length - 4; i++) {
//     result += "#";
//   }
//   //Add remaining 4 characters.
//   for (let i = cc.length - 4; i < cc.length; i++) {
//     result += cc[i];
//   }

//   return result;
// }

function maskify(cc) {
    //Replace frst part of string with #'s. Add last 4 of string to end.
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

// console.log(maskify("4556364607935616"));
