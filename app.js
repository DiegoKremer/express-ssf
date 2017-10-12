var express = require ("express"); // Inclui conteúdo do módulo Express
var app = express(); // Executa Express e salva na variável

//Rotas:
// "/" => "Olá!"
app.get("/", function(req, res){
    res.send("Olá!")
});


// "/tchau" => "Tchau!"
app.get("/tchau", function(req, res){
    res.send("Tchau!")
});
// "/cachorro" => "MEOW!!"
app.get("/cachorro", function(req, res){
    res.send("MEOW!!")
});

// Indica para o Express começar a escutar as requisições (Inicia servidor)
app.listen(3000, function(){
    console.log("Servidor iniciado.")
});