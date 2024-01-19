

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midValue = arr[mid];

        if (midValue === target) {
            return mid; // Target found, return the index
        } else if (midValue < target) {
            low = mid + 1; // Discard the left half
        } else {
            high = mid - 1; // Discard the right half
        }
    }

    return -1; // Target not found
}

// Example usage:
let stringArray = ["abd", "abc", "aa", "ad", "af", "aba", "aca", "aaaaaaaaaaaaaaaaaa", "z"];
let sortedArray = stringArray.slice().sort();
console.log(sortedArray)
// let targetString = "date";

// let result = binarySearch(stringArray, targetString);

// if (result !== -1) {
//     console.log(`${targetString} found at index ${result}`);
// } else {
//     console.log(`${targetString} not found in the array`);
// }
