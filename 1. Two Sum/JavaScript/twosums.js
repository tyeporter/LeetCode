"use strict"

var twoSum = function(nums, target) {
    // Check for variable types and array length
    if (!Array.isArray(nums) 
        || !nums.every(num => !isNaN(num))
        || isNaN(target)
        || nums.length === 0 
        || nums.length === 1
        ) return undefined;
    
    let num1 = 0;
    let num2 = 0;
    let pairFound = false;
    
    // Stop at second-to-last item so we stay in range
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                pairFound = true;
                num1 = i;
                num2 = j;
            }
        }
    }
    
    // If for some reason we didn't find pair
    if (!pairFound) return undefined;
    
    return [num1, num2];
};

console.log(twoSum([2,7,11,15], 9));