function ejercicio5a(){
    var v_aux= ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
    for (i = 0; i < v_aux.length; i++) {
        alert(v_aux[i])
      }
}

function ejercicio5b(){
    var v_aux= ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
    for (i = 0; i < v_aux.length; i++) {
        alert(v_aux[i].substring(0,1).toUpperCase()+v_aux[i].substring(1))
      }
}

function ejercicio5c(){
    var sentence="";
    var v_aux= ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
    for (i = 0; i < v_aux.length; i++) {
        sentence+=v_aux[i];
      }
    alert(sentence);  
}

function ejercicio5d(){
    var v_aux=[];
    for (i = 0; i < 10; i++) {
        v_aux.push(i);
      }
    console.log(v_aux);  
}