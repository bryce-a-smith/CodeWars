// function isPowerOfTwo(n){
//   //.. should return true or false ..
//   if(n === 1) {
//     return true;
//   } else {
//     if(n % 2 === 0 && Number.isInteger(n/2)) {
//         return isPowerOfTwo(n/2);
//     } else {
//       return false;
//     }
//   }
// }

/////////////////////////////////////

// function isPowerOfTwo(n) {
//   //1 is a power of everything
//   if (n === 1) {
//     return true;
//   } else {
//     //Loop to continually divide n by 2.
//     while (n > 1) {
//       if (n % 2 != 0) {
//         return false;
//       }
//       n = n / 2;
//     }
//   }
//   //If an even number is divided by 2 to eventually equal 1, it is a power of 2.
//   return n === 1;
// }

function isPowerOfTwo(n) {
  //.. should return true or false ..
  return Number.isInteger(Math.log2(n));
}
