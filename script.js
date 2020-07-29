alert("Prueba de alerta");
document.addEventListener('DOMContentLoaded', function () {
    let newP = document.createElement('p');
    newP.setAttribute('id', "info");
    newP.innerHTML = "<strong>Hola</strong> ese parrafo <span>es una prueba de DOM</span> para mirar la entrada de elementos desde js Saludos!"
    let elemP = document.getElementsByTagName('p');
    elemP[0].setAttribute('id', "primero");
    elemP[1].setAttribute('id', "segundo");
    document.body.appendChild(newP)
}

)