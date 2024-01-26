//rec + memo

var findPaths = function (m, n, maxMove, sr, sc) {
    const memo = new Array(51).fill(null).map(() =>
        new Array(51).fill(null).map(() =>
            new Array(51).fill(null)
        )
    );
    const mod = 1000000007;
    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    function solve(m, n, maxMove, sr, sc) {
        let result = 0;
        if (sr < 0 || sr >= m || sc < 0 || sc >= n) {
            return 1;
        }
        if (maxMove <= 0) {
            return 0;
        }
        if (memo[sr][sc][maxMove] !== null) {
            return memo[sr][sc][maxMove];
        }
        for (const dir of direction) {
            const new_row = sr + dir[0];
            const new_col = sc + dir[1];
            result += solve(m, n, maxMove - 1, new_row, new_col) % mod;
        }
        return memo[sr][sc][maxMove] = result % mod;
    }
    return solve(m, n, maxMove, sr, sc);
};
