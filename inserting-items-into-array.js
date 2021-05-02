var duplicateZeros = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            for (let j = arr.length - 1; j > i; j--) {
                arr[j] = arr[j - 1]
                console.log(arr)
            }
            arr[i + 1] = 0
            i++
        }
    }
    return arr
};

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])