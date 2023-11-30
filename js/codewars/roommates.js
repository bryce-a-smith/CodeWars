function roomMates(rooms, floor) {
  let occupants = [];

  //Check if floor 1.
  if (floor == 1) {
    //Loop through rooms and determine if occupied.
    for (let i = 0; i < 6; i++) {
      if (rooms[i] != "") {
        //Add names to list of occupants
        occupants.push(rooms[i]);
      }
    }
    //Check if floor 2.
  } else if (floor == 2) {
    //Loop through rooms and determine if occupied.
    for (let i = 6; i < rooms.length; i++) {
      if (rooms[i] != "") {
        //Add names to list of occupants
        occupants.push(rooms[i]);
      }
    }
  }

  return occupants;
}
