function getLCS(a, b) {
    let count = 0;
    let current = 0;
    let arrA = a.split('');
    let arrB = b.split('');
    for (let i = 0;i<a.length;i++) {
        if (arrA[i] == arrB[i]) {
            current++;
        } else {
            if (current > count) {
                count = current;
            }
            current = 0;
        }
    }
    return count;
}