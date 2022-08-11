
//cookie
var cartelCookie = document.querySelector('.cookie')
var aceptar = document.querySelector('.cookie a')
var mostrarMensaje = false

if (mostrarMensaje){
    cartelCookie.style.display = 'none'

}

aceptar.addEventListener('click', function () {
    cartelCookie.style.display = 'none'
})

// footer(newsletter)

var botonDeEnviar = document.querySelector('#footer form button')

botonDeEnviar.addEventListener('click', function(){
    
    botonDeEnviar.parentElement.remove()
    
   var parrafo = document.createElement('p')
       parrafo.innerHTML = 'Hemos recibido la suscripcion'
    
     document.querySelector('#footer').appendChild(parrafo)

})

