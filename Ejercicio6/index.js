function ejercicio6a(p_val1,p_val2){
    var v_aux=p_val1+p_val2;
    console.log(v_aux);
    return(v_aux);
}

function ejercicio6b(p_val1,p_val2){
    if (isNaN(p_val1)){
        alert(p_val1+" No es un número");
        return("NaN");
    }
    else if (isNaN(p_val2)){
        alert(p_val2+" No es un número");
        return("NaN");
    }
    else
    var v_aux=p_val1+p_val2;
    console.log(v_aux);
    return(v_aux);
}

function ejercicio6c(p_val1){
    if (p_val1 % 1 == 0) {
        //alert (p_val1+" Es un numero entero");
        return(true);
    } 
    else
        return(false);
}

function ejercicio6d(p_val1,p_val2){
    if (isNaN(p_val1)){
        alert(p_val1+" No es un número");
        return("NaN");
    }
    else if (isNaN(p_val2)){
        alert(p_val2+" No es un número");
        return("NaN");
    }
    else if (!ejercicio6c(p_val1)){
        alert(p_val1+" Es un decimal");
        //alert(Math.round(p_val1));
        return(Math.round(p_val1));
    }
    else if (!ejercicio6c(p_val2)){
        alert(p_val2+" Es un decimal");
        //alert(Math.round(p_val2));
        return(Math.round(p_val2));
    }
    else
    var v_aux=p_val1+p_val2;
    console.log(v_aux);
    return(v_aux);
}

function ejercicio6e(p_val1,p_val2){
    var v_aux=ejercicio6b(p_val1,p_val2);    
    console.log(v_aux);
    return(v_aux);
}
