const sb = document.querySelector('#typeShear')
sb.onclick = (event) => {
    event.preventDefault();
    function disableTxt() {
    document.getElementById("buscador").disabled = true;
  }
  function undisableTxt() {
    document.getElementById("buscador").disabled = false;
  }
  console.log(sb.selectedIndex)
    if(sb.selectedIndex == 0)
    disableTxt()
    if(sb.selectedIndex == 1)
    undisableTxt()
    if(sb.selectedIndex == 2)
    undisableTxt()
}
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
})(); 