var findMaxConsecutiveOnes = function (nums) {
    let maxC = 0
    let temp = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            temp++
        } else {
            temp = 0
        }
        maxC = (maxC > temp) ? maxC : temp
    }
    return maxC
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]))