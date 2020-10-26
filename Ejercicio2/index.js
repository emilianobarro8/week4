function ejercicio2a(){
    var v_aux="Hello World";
    document.getElementById("e2a").innerHTML = "Salida: "+ v_aux.toUpperCase();
}

function ejercicio2b(){
    var v_aux="Hello World";
    var v_aux1=v_aux.substring(0,5);
    document.getElementById("e2b").innerHTML = "Salida: "+ v_aux1;
}

function ejercicio2c(){
    var v_aux="Hello World";
    var v_aux1=v_aux.substring(v_aux.length - 3,v_aux.length);
    document.getElementById("e2c").innerHTML = "Salida: "+ v_aux1;
}

function ejercicio2d(){
    var v_aux="Hello World";
    var v_aux1=v_aux.substring(0,1).toUpperCase()+v_aux.substring(1,v_aux.length).toLowerCase();
    document.getElementById("e2d").innerHTML = "Salida: "+ v_aux1;
}

function ejercicio2e(){
    var v_aux="Hello World";
    var v_aux1=v_aux.indexOf(" ");
    document.getElementById("e2e").innerHTML = "Salida: "+ v_aux1;
}

function ejercicio2f(){
    var v_aux="HelloWorld Ejercicio2";
    var v_aux1= v_aux.substring(0,1).toUpperCase()+v_aux.substring(1,v_aux.indexOf(" ")).toLowerCase()+v_aux.substring(v_aux.indexOf(" "),v_aux.indexOf(" ")+2).toUpperCase()+v_aux.substring(v_aux.indexOf(" ")+2,v_aux.length).toLowerCase();
    document.getElementById("e2f").innerHTML = "Salida: "+ v_aux1;
}