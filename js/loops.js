//EJEMPLO

/*for (var i = 0; i < 11; i++){
    if( i % 2 !== 0){
        console.log(i)
    }
    
}*/


/*
var mixto = [
    'federico',
    'yamila',
    123,
    true,
    null,
    []
]

mixto.push('nuevo dato')

for (var i = 0; i < mixto.length; i++){
    console.log(mixto[i])
}
*/

//TERMINA EJEMPLO






// modifico el MENU

var linksContainer = document.querySelector('.menu')
     console.log(linksContainer)

/*var link ='<a href="#home">...</a>'*/

var links = [
    {
        href : '#Home',
        name : 'Home'
    },
    {
        href : '#Nosotros',
        name : 'Nosotros'
    },
    {
        href : '#Productos',
        name : 'Productos'
    },
    {
        href : '#Contactos',
        name : 'Contactos'
    }
]

for (var i = 0; i < links.length; i++){
    
     linksContainer.innerHTML += generateLink(links[i])
}

function generateLink(link){
    return '<a href=" ' + link.href + ' ">'  + link.name + '</a>'

}


 

//Modifico ITEMS

var itemsContainer = document.querySelector('#items')
console.log(itemsContainer)

var items = [
    {
        img : "https://placeimg.com/640/480/tech",
        p : ' 1 Product category one'
    },
    {
        img : "https://placeimg.com/640/480/tech",
        p : '2 Product category one'
    },
    {
        img : "https://placeimg.com/640/480/tech",
        p : ' 3 Product category one'
    },
    {
        img : "https://placeimg.com/640/480/tech",
        p : '4 Product category one'
    },
    {
        img : "https://placeimg.com/640/480/tech",
        p : '5 Product category one'
    },
    {
        img : "https://placeimg.com/640/480/tech",
        p : ' 6 Product category one'
    },
    {
        img : "https://placeimg.com/640/480/tech",
        p : ' 7 Product category one'
    },
    {
        img : "https://placeimg.com/640/480/tech",
        p : ' 8 Product category one'
    },
    {
        img : "https://placeimg.com/640/480/tech",
        p : ' 9 Product category one'
    },
    {
        img : "https://placeimg.com/640/480/tech",
        p : ' 10 Product category one'
    },
    {
        img : "https://placeimg.com/640/480/tech",
        p : ' 11 Product category one'
    },
    {
        img : "https://placeimg.com/640/480/tech",
        p : 
            {
                span :  '27000',
                span :  '25000',
                span :  'OFF',
            } ,
        
    },

]

var paginacion = document.querySelector('.pagina')
var cantidadElementos = 4

function mostrarItems(q){
    for (var i = 0; i < q; i++){
        itemsContainer.innerHTML +=     `
         <div>
           <img src=" ${items[i].img} "alt=""/>
           <p><span class="negrita">${items[i].p}</span>( tag span is better to use)</p>
         </div>
         `
    }
}

paginacion.addEventListener('click', function(){
     
    mostrarItems(cantidadElementos)
   
    
})

cantidadElementos = 12

mostrarItems(cantidadElementos)


