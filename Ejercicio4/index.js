function ejercicio4a(){
    var v_aux=Math.random();
    if (v_aux>=0.5){
        alert(v_aux+" Greater than 0,5");
    } 
    else
    alert(v_aux + " Lower than 0,5");
}


function ejercicio4b(){
    var Age=document.getElementById("edad").value;
    if (Age<2){
        alert("Bebe");
    } 
    else if (Age<=12){
        alert("Nino");
    }
    else if (Age<=19){
        alert("Adolecente");
    }
    else if (Age<=30){
        alert("Joven");
    }
    else if (Age<=60){
        alert("Adulto");
    }
    else if (Age<=75){
        alert("Adulto Mayor");
    }
    else 
    alert("Anciano");
    
}