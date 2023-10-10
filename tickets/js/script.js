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
document.getElementById("valor-entrada").innerHTML=precio

function calcTotal() {
  
  console.log("Ingreso a calcTotal")

  let cant = document.getElementById("cant").value
  console.log(cant)

  if (cant >= 1) {
    document.getElementById("importe-texto").className="d-inline-block"
    let total = cant * precio
    console.log(total)

    let desc = document.getElementById("desc").value
    total = total - (total * desc / 100)

    // document.getElementById("total").style.color="red"
    // document.getElementById("total").className = "bg-info p-1"
    document.getElementById("total").innerHTML = total
    document.getElementById("submit").className = "btn btn-primary"

  } else if (cant < 0) {
    document.getElementById("importe-texto").className="d-none"
    // document.getElementById("total").className = "bg-danger p-1"
    document.getElementById("total").innerHTML = "Ha ingresado un número negativo"
    document.getElementById("submit").className = "btn btn-secondary disabled"
  } else {
    document.getElementById("importe-texto").className="d-inline-block"
    // document.getElementById("total").className = ""
    document.getElementById("total").innerHTML = "0"
    document.getElementById("submit").className = "btn btn-secondary disabled"

  }
}


function resetCant() {
  document.getElementById("importe-texto").className="d-none"
  document.getElementById("total").className = ""
  document.getElementById("total").innerHTML = ""
  document.getElementById("submit").className = "btn btn-secondary disabled"
}