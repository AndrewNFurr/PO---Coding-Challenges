function smallAndLarge(arr) {
    let sorted = arr.sort((a, b) => a-b);
    let small = sorted[0];
    let large = sorted[length-1];
    return([small, large]);
}