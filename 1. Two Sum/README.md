# [1. Two Sum](https://leetcode.com/problems/two-sum/)

*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.*

*You may assume that each input would have exactly one solution, and you may not use the same element twice.*

*You can return the answer in any order.*

## Go (Solution)

```go
func twoSum(nums []int, target int) []int {
    // If the slice length is zero or one, return an empty slice
    if len(nums) == 0 || len(nums) == 1  { return []int{} }
    
    num1 := 0
    num2 := 0
    pairFound := false
    
    // Stop at second-to-last item so we stay in range
    for i := 0; i < len(nums) - 1; i++ {
        for j := i + 1; j < len(nums); j++ {
            if nums[i] + nums[j] == target {
                pairFound = true
                num1 = i
                num2 = j
            }
        }
    }
    
    // If for some reason we didn't find pair
    if (!pairFound) {
        return []int{}
    }
    
    return []int{num1, num2}
}
```
---

## JavaScript (Solution)

```javascript 
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
```

## Contributors
These solutions are maintained by the following people:
<p>
    <a href="https://github.com/tyeporter">
        <img src="https://avatars1.githubusercontent.com/u/16263420?s=460&v=4" width="100" height="100" />
    </a>
</p>
