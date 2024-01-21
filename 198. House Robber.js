https://leetcode.com/problems/house-robber/?envType=daily-question&envId=2024-01-21

//rec + memo
const memo = new Array(101).fill(-1);
function solve(nums, i, n) {
    if (i >= n) {
        return 0;
    }

    if (memo[i] !== -1) {
        return memo[i];
    }

    const steal = nums[i] + solve(nums, i + 2, n);
    const skip = solve(nums, i + 1, n);

    return memo[i] = Math.max(steal, skip);
}

var rob = function (nums) {
    const n = nums.length;
    return solve(nums, 0, n);
};

