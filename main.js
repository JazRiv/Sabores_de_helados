nombre_persona_array=[];

function submit()
{
    var nombre_1 = document.getElementById("nombre_de_persona_1").value;
    var nombre_2 = document.getElementById("nombre_de_persona_2").value;
    var nombre_3 = document.getElementById("nombre_de_persona_3").value;
    var nombre_4 = document.getElementById("nombre_de_persona_4").value;

    nombre_persona_array.push(nombre_1);
    nombre_persona_array.push(nombre_2);
    nombre_persona_array.push(nombre_3);
    nombre_persona_array.push(nombre_4);

    console.log(nombre_persona_array);

    document.getElementById("display_nombre").innerHTML=nombre_persona_array;
    document.getElementById("boton_enviar").style.display="none";
    document.getElementById("boton_ordenar").style.display="inline-block";
}
function sorting(){
    nombre_persona_array.sort();
    console.log(nombre_persona_array);
    document.getElementById("display_nombre").innerHTML=nombre_persona_array;
}
