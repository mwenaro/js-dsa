function fibNthMember(n) {
    // Base cases
    if ([0, 1].includes(n)) return n;
    // Recursive case
    return fibNthMember(n - 1) + fibNthMember(n - 2);
}


console.log(fibNthMember(10))

//a better version
function nthFibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if ([0, 1].includes(n)) return n;
    memo[n] = nthFibonacci(n - 1, memo) + nthFibonacci(n - 2, memo);
    return memo[n];
}
