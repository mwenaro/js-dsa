const arr = [7, 12, 9, 4, 11]

function getMinVal(arr) {
    if (arr.length === 0) {
        throw new Error('Array is empty');
    }

    let minVal = arr[0]; // Initialize minVal with the first element

    for (let i = 1; i < arr.length; i++) { // Start from the second element
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }

    return minVal;
}

console.log(getMinVal(arr))