function saludar (){
    setTimeout(function(){
        console.log("hola")
        despedir()

    },2000)
}

function despedir(){
    console.log("adios")
}

saludar()
