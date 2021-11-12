const Ps = document.querySelectorAll('p'); 

Ps.forEach(function(p){

    if( p.textContent.includes('the')){
        p.remove()
    }
})