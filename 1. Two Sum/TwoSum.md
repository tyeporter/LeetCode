# Go

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