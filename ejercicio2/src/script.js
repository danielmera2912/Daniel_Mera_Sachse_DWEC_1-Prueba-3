const botton = document.querySelector("#boton");
botton.addEventListener("click", comprobar_anio);


function isLeapYear(anio){
    
    return (anio % 4 == 0 && anio % 100!= 0) || anio % 400 == 0;
}

function comprobar_anio(){
    let anio1= document.getElementById("anio1").value;
    let anio2=  document.getElementById("anio2").value;
    let correcto = false;
    let arrayBisiestos = [];
    if(Number(anio1) == anio1  && Number(anio2) == anio2 ){
        console.log(anio1)
        console.log(anio2)
        if(anio1>=2001 && anio1<=2500){
            if(anio2>=2001 && anio2 <=2500){
                if(anio1<anio2){
                    correcto= true;
                }
                else{
                    correcto = false;
                    alert("Año de la izquierda debe de ser menor al de la derecha.")
                }
            }
            else{
                alert("Año incorrecto, no entra en los límites")
                correcto= false;
            }
        }
        else{
            alert("Año incorrecto, no entra en los límites")
            correcto= false;
        }
        
      }
      else{
        alert("No se han introducido números")
        correcto= false;
      }
    if(correcto==true){
        if(isLeapYear(anio1)){
            // alert("El año "+anio1+ " es bisiesto")
        }
        else{
            // alert("El año "+anio1+ " no es bisiesto")
        }
        if(isLeapYear(anio2)){
            // alert("El año "+anio2+ " es bisiesto")
        }
        else{
            // alert("El año "+anio2+ " no es bisiesto")
        }
        for(let i=anio1; i<=anio2; i++){
            if(isLeapYear(i)){
                //alert("El año "+i+ " es bisiesto")
                arrayBisiestos.push(i);
            }
            else{
                //alert("El año "+i+ " no es bisiesto")
            }
        }
        
    }
    document.querySelector("p[id=bisiestos]").innerHTML= "Los años bisiestos son:"+ arrayBisiestos;
    
}