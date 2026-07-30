class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = -1;

        for (let i = 0; i < nums.length; i++) {
            let currentSum = 0;
            for (let j = i; j < nums.length; j++) {
                currentSum += nums[j]
                maxSum = Math.max(currentSum, maxSum)
            }
        }
        return maxSum
    }
}
