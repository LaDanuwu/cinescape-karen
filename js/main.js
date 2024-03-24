function closePanel(){
    let panel = document.getElementById("panel-lateral");

    panel.classList.toggle("active");
}

function showModal() {
    let modal = document.getElementById('model-pelicula');
    modal.style.display = 'block';
}

function closeModal() {
    let modal = document.getElementById('model-pelicula');
    modal.style.display = 'none';
}

function filtrarContenido(event) {
    
    let botonesFiltro = document.querySelectorAll('.filtros button');
    
    botonesFiltro.forEach(function(boton) {
        boton.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    console.log("Se ha filtrado el contenido relacionado con: ", event.target.innerText);
}


let botonesFiltro = document.querySelectorAll('.filtros button');


botonesFiltro.forEach(function(boton) {
    boton.addEventListener('click', filtrarContenido);
});

