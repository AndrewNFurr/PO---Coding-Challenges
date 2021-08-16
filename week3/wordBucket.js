function bucketize(string, num) {
    let arr = [];
    let count = 0;
    let tempString = '';
    let stringToAdd = '';
    for (let i = 0;i<string.length;i++) {
      let currChar = string[i];
      tempString += string[i];
      if (currChar === ' ' || i === string.length-1) {
        stringToAdd += tempString;
        tempString = '';
      }
      if (count === num || i === string.length-1) {
        if (i === string.length-1) {
          arr.push(stringToAdd);
        } else {
          arr.push(stringToAdd.substring(0, stringToAdd.length-1));
        }
        stringToAdd = '';
        count = 0;
      }
      count++;
    }
    return arr;
  }