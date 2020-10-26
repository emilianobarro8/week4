function ejercicio1a(){
    var v_aux=5;
    var v_aux1=7;
    var v_aux2=v_aux+v_aux1;
    document.getElementById("e1a").innerHTML = "Salida: "+ v_aux2;
}

function ejercicio1b(){
    var v_aux="Hello";
    var v_aux1=" World";
    var v_aux2=v_aux+v_aux1;
    document.getElementById("e1b").innerHTML = "Salida: "+ v_aux2;
}

function ejercicio1c(){
    var v_aux="Hello";
    var v_aux1=" World";
    var v_aux2=v_aux.length+v_aux1.length;
    document.getElementById("e1c").innerHTML = "Salida: "+v_aux2;
}