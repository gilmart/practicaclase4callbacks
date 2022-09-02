// decalrando la funcion principal
function principal (nombre, planeta, edad, estatura,secundaria){

    let aprendiz= {
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura,
    }
    secundaria(aprendiz) //llamando a la funcion secundaria
}

principal('juan', 'tierra', 15, 1.60, function(parametro){  //llamando a la funcion principal
    if (parametro.edad > 15){
        console.log(parametro + "fuerza")
    } else{
        console.log(parametro + 'luz')
    }
})