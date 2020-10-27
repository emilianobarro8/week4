function ejercicio3a(){
    var v_aux= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(v_aux[4]+" y "+v_aux[10]);
}


function ejercicio3b(){
    var v_aux= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(v_aux.sort());
}

function ejercicio3c(){
    var v_aux= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    v_aux.unshift("Empieza");
    v_aux.push("Termina");
    console.log(v_aux);
}

function ejercicio3d(){
    var v_aux= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    v_aux.shift();
    v_aux.pop();
    console.log(v_aux);
}

function ejercicio3e(){
    var v_aux= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(v_aux.reverse());
}

function ejercicio3f(){
    var v_aux= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(v_aux.join("-"));
}

function ejercicio3g(){
    var v_aux= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(v_aux.slice(4,11));
}