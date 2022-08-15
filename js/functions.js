//EJEMPLO

/*       nombre   argumento  
function sumar(a = 0, b = 0){
    var resultado = a + b
    console.log(resultado)
}

sumar( 1 ,2)
sumar( 5 ,5)
sumar()
*/

var calculadora = {
  
     resultado : 0,
   
     sumar(a = 0, b = 0){
        this.resultado += a + b
    },
    
       restar(a = 0, b = 0){
        this.resultado -= a - b
    },
    
    multiplicar(a = 0, b = 0){
        this.resultado *= a * b
    },
     
      
    
      

       obtenerResutaldo(){
        return this.resultado
    },

        resetearResultado(){
        return this.resultado = 0
    },

}

calculadora.sumar(6)
calculadora.sumar(6)

calculadora.restar(2,2)
calculadora.multiplicar(6 ,2)





console.log(calculadora.obtenerResutaldo())
//console.log(calculadora.resetearResultado())


/*
function nombreCompleto(primerNombre, segundoNombre, apellido){

    var resultado = ''

    resultado = primerNombre

    if (segundoNombre != ''){
        resultado = resultado + ' ' + segundoNombre
    }

    resultado = resultado + ' ' + apellido

    return resultado
}

nombreCompleto('federico', 'elMacho','vaca')
nombreCompleto('cosme','', 'fulanito')
*/