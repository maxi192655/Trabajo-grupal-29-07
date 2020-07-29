/*let elemP = document.getElementsByTagName('p')[0];
var attId = document.createAttribute('id');
attId.value = "primero";
elemP.appendChild(attId);
elemP[0].setAttribute('id',"primero");*/
alert("Prueba de alerta");
document.addEventListener('DOMContentLoaded', function(){
let elemP = document.getElementsByTagName('p')[0]
elemP[0].setAttribute('id',"primero")
//elemP[1].setAttribute('id', "segundo")    
}

)