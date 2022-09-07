    // Ejercicio N°1
function carga(){
    var number1=document.getElementById("number1").value;
    var number2=document.getElementById("number2").value;
    var number3=document.getElementById("number3").value;
    var mayor,mayorNumero;
    
    if (number1 > number2){
        mayor=number1;
    }else{
        mayor=number2;
    }

    if (mayor > number3){
        mayorNumero=mayor;
    }else{
        mayorNumero=number3;
    }
    // Mostramos el numero mayor por pantalla
    var mostrarNumMayor = document.getElementById("mostrarNumMayor");
    mostrarNumMayor.innerHTML="Numero mayor: "+mayorNumero+"";
}
 // Ejercicio N°2
function carga2(){
    var numeroEntero=document.getElementById("numeroEntero").value;


    if (numeroEntero==0){

        console.log("El numero ingresado es cero");
    }
    if (numeroEntero > 0){
        console.log("El numero ingresado es positivo");
    }
    if (numeroEntero < 0){
        console.log("El numero ingresado es negativo");
    }
    
}

 // Ejercicio N°4
function carga4(){
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var domicilio=document.getElementById("domicilio").value;
    var curso=document.getElementById("curso").value;
    var carrera=document.getElementById("carrera").value;
    var materia=document.getElementById("materia").value;
    var nota=document.getElementById("nota").value;
    //Mostramos los datos del alumno llamando al ID del h3
    var mostrarDatos = document.getElementById("mostrarDatos");
    mostrarDatos.innerHTML="Nombre: "+nombre+"<br>"+"Apellido: "+apellido+"<br>"+"Domicilio: "+domicilio+"<br>"+"Curso: "+curso+"<br>"+"Carrera: "+carrera+"<br>"+"Materia: "+materia+"<br>"+"Nota: "+nota+"";

}
