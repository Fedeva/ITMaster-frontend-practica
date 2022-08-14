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






// modifico el menu

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
    console.log(link)
    return '<a href=" ' + links[i].href + ' ">'  + links[i].name + '</a>'

}


 

//Modifico Items

var itemsContainer = document.querySelector('#items')
console.log(itemsContainer)

var items = [
    {
        img : '"https://placeimg.com/640/480/tech"',
        p : '<span class="negrita">Product category one ( tag span is better to use)</span>'
    },
    {
        img : '"https://placeimg.com/640/480/tech"',
        p : '<span class="negrita">Product category one ( tag span is better to use)</span>'
    },
    {
        img : '"https://placeimg.com/640/480/tech"',
        p : '<span class="negrita">Product category one ( tag span is better to use)</span>'
    },
    {
        img : '"https://placeimg.com/640/480/tech"',
        p : '<span class="negrita">Product category one ( tag span is better to use)</span>'
    },
    {
        img : '"https://placeimg.com/640/480/tech"',
        p : '<span class="negrita">Product category one ( tag span is better to use)</span>'
    },
    {
        img : '"https://placeimg.com/640/480/tech"',
        p : '<span class="negrita">Product category one ( tag span is better to use)</span>'
    },
    {
        img : '"https://placeimg.com/640/480/tech"',
        p : '<span class="negrita">Product category one ( tag span is better to use)</span>'
    },
    {
        img : '"https://placeimg.com/640/480/tech"',
        p : '<span class="negrita">Product category one ( tag span is better to use)</span>'
    },
    {
        img : '"https://placeimg.com/640/480/tech"',
        p : '<span class="negrita">Product category one ( tag span is better to use)</span>'
    },
    {
        img : '"https://placeimg.com/640/480/tech"',
        p : '<span class="negrita">Product category one ( tag span is better to use)</span>'
    },
    {
        img : '"https://placeimg.com/640/480/tech"',
        p : '<span class="negrita">Product category one ( tag span is better to use)</span>'
    },
    {
        img : '"https://placeimg.com/640/480/tech"',
        p : '<span class="negrita">Product category one ( tag span is better to use)</span>'
    },

]

for (var i = 0; i < items.length; i++){
    itemsContainer.innerHTML += '<div><img src=' + items[i].img + 'alt=" logo"/> <p>' + items[i].p + '</p></div>'
}