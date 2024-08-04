let fib = 0, prev = 0, cur = 1


while (fib < 100) {
    if (fib == 0) {
        console.log(prev)
        console.log(cur)


    } else {

        console.log(fib)
    }

    fib = prev + cur
    prev = cur, cur = fib

}

// abetter version is here
// let prev = 0, cur = 1;

// while (prev < 100) {
//     console.log(prev);
//     let next = prev + cur;
//     prev = cur;
//     cur = next;
// }


// let prev = 0, cur = 1;

// for (let i = 0; i < 10; i++) {
//     console.log(prev);
//     let next = prev + cur;
//     prev = cur;
//     cur = next;
// }
