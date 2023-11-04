// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

const precio = 1000
let audiencia
let cantEntradas
let val = 0
document.getElementById("valor-entrada").innerHTML=precio

function calcTotal() {
  
  console.log("Ingreso a calcTotal")

  cantEntradas = document.getElementById("cant").value
  console.log(cantEntradas)

  if (cantEntradas >= 1) {
    document.getElementById("importe-texto").className="d-inline-block"
    // let total = cantEntradas * precio
    let total = this.procesarPrecio()
    console.log(total)

    // let desc = document.getElementById("desc").value
    // total = total - (total * desc / 100)
    let desc = this.procesarDescuento(total)
    total = total - desc
    val = total


    // document.getElementById("total").style.color="red"
    // document.getElementById("total").className = "bg-info p-1"
    document.getElementById("total").innerHTML = total
    document.getElementById("submit").className = "btn btn-primary"
  

    
    if(document.forms['form-compra'].reportValidity()){
      document.getElementById("btn-resumen").className = "btn btn-primary"
    } else{
      document.getElementById("btn-resumen").className = "btn btn-secondary disabled"
    }
    

  } else if (cantEntradas < 0) {
    document.getElementById("importe-texto").className="d-none"
    // document.getElementById("total").className = "bg-danger p-1"
    document.getElementById("total").innerHTML = "Ha ingresado un número negativo"
    document.getElementById("submit").className = "btn btn-secondary disabled"
  } else {
    document.getElementById("importe-texto").className="d-inline-block"
    // document.getElementById("total").className = ""
    document.getElementById("total").innerHTML = "0"
    document.getElementById("submit").className = "btn btn-secondary disabled"
    document.getElementById("btn-resumen").className = "btn btn-secondary disabled"

  }
}

function cambiarSelect(descuento) {
  document.getElementById('desc').value = descuento
  this.calcTotal()
}

function resetCant() {
  document.getElementById("importe-texto").className="d-none"
  document.getElementById("total").className = ""
  document.getElementById("total").innerHTML = ""
  document.getElementById("submit").className = "btn btn-secondary disabled"
  document.getElementById("btn-resumen").className = "btn btn-secondary disabled"
}

function procesarPrecio(){
  return precio * cantEntradas
}

function procesarDescuento(precioTotal){
  let descPorciento = document.getElementById("desc").value
  return precioTotal * (descPorciento / 100)
}

function procesarAudiencia(){
  switch(document.getElementById('desc').value){
    case '80': 
      audiencia = "Estudiante"
      break;
    case '50':
      audiencia = "Trainee";
      break;
    case '15':
      audiencia = "Junior";
      break;
    default:
      audiencia = 'Público general';
  }
}

function mostrarResumen(){
  let importe = this.procesarPrecio()
  let descuento = this.procesarDescuento(importe)

  this.procesarAudiencia();
  document.getElementById('audiencia').innerHTML = audiencia;

  document.getElementById('cant-entradas').innerHTML = cantEntradas;

  document.getElementById('importe').innerHTML = importe

  document.getElementById('descuento').innerHTML = descuento

  document.getElementById("total-resumen").innerHTML = val
  
}