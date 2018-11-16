function fib() {
    // some variables here
    let x = 0;
    let y = 1;
    function nacci() {
        // do something to those variables here
        const temp = x;
        console.log(y);
        x = y;
        y += temp;
    }
    return nacci;
}
var fibCounter = fib();
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()