function fibonacci(prev = 0, cur = 1, loop = 10) {
    console.log(prev)
    if (loop <= 1) return
    let next = cur + prev
    prev = cur, cur = next

    fibonacci(prev, cur, loop - 1)

}

fibonacci(0,1)