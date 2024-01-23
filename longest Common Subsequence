var longestCommonSubsequence = function (text1, text2) {
    const memo = [];
    for (let i = 0; i < text1.length; i++) {
        memo.push(new Array(text2.length).fill(-1));
    }

    return solve(text1, text2, 0, 0, memo);
};

function solve(str1, str2, i, j, memo) {
    const n = str1.length;
    const m = str2.length;

    if (i >= n || j >= m) {
        return 0;
    }

    if (memo[i][j] !== -1) {
        return memo[i][j];
    }

    let result;
    if (str1[i] === str2[j]) {
        result = 1 + solve(str1, str2, i + 1, j + 1, memo);
    } else {
        result = Math.max(solve(str1, str2, i + 1, j, memo), solve(str1, str2, i, j + 1, memo));
    }

    memo[i][j] = result;
    return result;
}
