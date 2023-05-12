(() => {
  const App = {
  htmlElements: {
  operationsForm: document.getElementById('operations'),
  },
  init: () => {
  console.log('Inicio de la App ...');
  App.methods.mostrarSecuenciaDeFibonacci({num})
  App.htmlElements.operationsForm.addEventListener(
  'submit',
  App.handlers.operationsForm
    );
  },
  methods: {
  mostrarSecuenciaDeFibonacci({num}) {
  let fibonacci = [];
  let x = 0;
  for (x; x<num; x++){
  if(x==0){
  fibonacci.push(0);
  }
  else if(x==1){
  fibonacci.push(1);
  }
  else{
  fibonacci.push(fibonacci[x-1]+fibonacci[x-2]);
    }
  }
  return fibonacci
  }, 
  printSequenceOnCards(sequence){
  const cardsContainer = document.getElementById("respond");
  cardsContainer.innerHTML = "";
  sequence.forEach((numero) => {
  const card = document.createElement("div");
  card.classList.add("card-respond");
  card.id=("card"+numero)
  card.innerHTML = numero;
  cardsContainer.appendChild(card);
    });
  },
  CrearLabel(){

  const myNodelist = document.getElementsByClassName("card-respond");
  for (let i = 0; i < myNodelist.length; i++) {
    const lb = document.createElement("label");
    lb.classList.add("lb");
    lb.id=("lb"+i);
    lb.innerHTML = "X";
    myNodelist[i].appendChild(lb);
    }     
  },
  DeleteCardElementOnClick(){
  const cardsContainer = document.getElementById("respond");
  cardsContainer.onmouseenter = function() {
  const myNodelist = document.getElementsByClassName("card-respond");
  const myNodelistlb = document.getElementsByClassName("lb");
  console.log(myNodelistlb)
  for (let i = 0; i < myNodelist.length; i++) {
  const lb = document.getElementById(myNodelist[i].id);
  const lb2 = document.getElementById(myNodelistlb[i].id);
  lb2.onmouseenter = function() {
  lb2.style.color = "red";
  }
  lb2.onmouseleave = function() {
  lb2.style.color = "white";
  }
  lb.onclick = function() {
  alert("Esta apunto de Eliminar el Elemento Card")
  lb.parentNode.removeChild(lb);
      }
    }
  }
},
},
  handlers: {
  operationsForm(event){
    event.preventDefault();
    const num = parseInt(event.target.num.value);
    const nose = App.methods.mostrarSecuenciaDeFibonacci({num})
    App.methods.printSequenceOnCards(nose);
    App.methods.CrearLabel();
    App.methods.DeleteCardElementOnClick();
      },
    }
  }
  App.init();
  })();