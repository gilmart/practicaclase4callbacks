function saludar(nombre,callback){
   let name = nombre
    console.log('hola '+ nombre)
    callback(name)
}

saludar('gilma', function(parametro){
    console.log('ya desayunaste? ' +parametro)
})