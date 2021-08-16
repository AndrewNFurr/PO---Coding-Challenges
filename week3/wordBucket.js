function bucketize(string, num) {
  let arr = string.split(' ');
  let final = [];
  let str = `${arr[0]}`;
  for (let i = 1;i<arr.length;i++) {
    let temp = str + ' ' + arr[i];
    if (temp.length <= num) {
      str += ' ' + arr[i];
    } else {
      final.push(str);
      str = arr[i];
    }
    if (i === arr.length-1) {
      final.push(str);
    }
   
    if (arr[i-1].length > num) {
      return [];
    }
  }
  return final;
  
}
  