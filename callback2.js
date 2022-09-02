//declarando la funcion sumar
function sumar(num1, num2,callback){
    let suma= num1+num2
    callback(suma)
}

//llamar a la funcion sumar
//los parametros de la funcion son variables locales
sumar(5,10, function(parametro){
    console.log('la suma es ' +parametro)
})



