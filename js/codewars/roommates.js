// function roomMates( rooms, floor ){
  
//   let occupants = [];
  
//   if(rooms.length == 0) {
//     return occupants;
//   }
  
//   //Check if floor 1.
//   if(floor ==  1) {
//     //Loop through rooms and determine if occupied.
//     for(let i = 0; i < 6; i++) {
// //       if(rooms[i] != "") {
// //           //Add names to list of occupants
// //           occupants.push(rooms[i]);
// //       }
//       occupants = rooms.filter();
//     }
//     //Check if floor 2.
//   } else if(floor == 2) {
//      //Loop through rooms and determine if occupied.
//     for(let i = 6; i < rooms.length; i++) {
// //         if(rooms[i] != "") {
// //           //Add names to list of occupants
// //           occupants.push(rooms[i]);
// //       }
//     }
//   }
  
//   return occupants;
// }

function roomMates(rooms, floor) {
  
    
    let occupants = [];
    
    //Check case of empty array.
    if(rooms.length == 0) {
      return occupants;
    }
    
    //Check if floor 1
      if(floor == 1) {
        //Filter through first 6 elements, for occupied rooms (non-empty names)
          occupants = rooms.slice(0, 6).filter((room) => room != "");
      }
  
    //Check if floor 2
      if(floor == 2) {
           //Filter through starting with 6th element, for occupied rooms (non-empty names)
          occupants = rooms.slice(6).filter((room) => room != "");
      }
  
      return occupants;
    }
    
  