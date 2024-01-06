//Question Link: https://leetcode.com/problems/maximum-profit-in-job-scheduling/?envType=daily-question&envId=2024-01-06

class Solution {
    constructor() {
        this.memo = new Array(50001).fill(-1);
        this.n = 0;
    }

    getNextIndex(array, l, currentJobEnd) {
        let r = this.n - 1;
        let result = this.n + 1;

        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);
            if (array[mid][0] >= currentJobEnd) {
                result = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return result;
    }

    solve(array, i) {
        if (i >= this.n) return 0;
 if(this.memo[i] !== -1) return this.memo[i];
        let next = this.getNextIndex(array, i + 1, array[i][1]);

        let taken = array[i][2] + this.solve(array, next);
        let notTaken = this.solve(array, i + 1);

        return this.memo[i] = Math.max(taken, notTaken);
    }

    jobScheduling(startTime, endTime, profit) {
        this.n = startTime.length;

        const array = new Array(this.n).fill().map(() => new Array(3).fill(0));

        for (let i = 0; i < array.length; i++) {
            array[i][0] = startTime[i];
            array[i][1] = endTime[i];
            array[i][2] = profit[i];
        }

        array.sort((arr1, arr2) => arr1[0] - arr2[0]);

        return this.solve(array, 0);
    }
}

var jobScheduling = function (startTime, endTime, profit) {
    let solution = new Solution();
    return solution.jobScheduling(startTime, endTime, profit);
};
