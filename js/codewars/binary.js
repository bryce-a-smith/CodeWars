function sortByBinaryOnes(list) {
    let binaryList = list.map((num) => num.toString(2));
  
    let maxLength = Math.max(...binaryList.map(bin => bin.length));
    
    let onesList = Array.from({ length: maxLength }, () => []);
  
    for(bin of binaryList) {
      let numofOnes = 0;
      for(char of bin) {
          if(char == "1") {
              numofOnes += 1;
          }
      }
      onesList[maxLength-numofOnes].push(bin);
    }
  
      function sortBins(arr) {
      let sorted = arr.sort((a, b) => {
        let diffL = a.length - b.length;
        if (diffL === 0) {
          for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
              return parseInt(a[i], 2) - parseInt(b[i], 2);
            }
          }
        }
        return diffL;
      });
      return sorted;
    }
  
    for(ones of onesList) {
      ones = sortBins(ones);
    }
  
    let sorted = [].concat(...onesList)
  
    return sorted.map((num) => parseInt(num, 2));
  }
  