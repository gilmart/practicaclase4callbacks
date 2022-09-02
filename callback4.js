function principal (numeros, secundaria){
    
    setTimeout(function(){
        let suma =0
        numeros.forEach(function(numero){
            suma=suma+numero
        })
            secundaria(suma)
    },2000)
}

//un arreglo se recorre con un forEach

let arreglo=[1,2,3,4,5]
principal(arreglo,function(parametro){

    console.log(parametro)
  
})