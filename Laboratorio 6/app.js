(() => {
    let App = {
        init: () => {
            App.methods.mostrarFibonacci(10);
        },
        methods: {
            mostrarFibonacci(fibonacci) {
                    const fib = [0,1]
                    console.log("Serie Fibonacci : ")
                    for (let x = 2; x <= fibonacci; x++){
                    fib[x] = fib[x - 2] + fib[x - 1]
                    }
                    fib.forEach(element => {
                        console.log("#"+element)
                    });
                }
            },
        }
    App.init();
})(); // ejecutar en terminal> node app.js