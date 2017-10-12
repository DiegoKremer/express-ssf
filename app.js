var express = require ("express"); // Inclui conteúdo do módulo Express
var app = express(); // Executa Express e salva na variável

//Rotas:
// Raíz
app.get("/", function(req, res){
    res.render("principal.ejs");
    //res.send("Olá! Bem vindo ao tutorial de Express")
});


// Rota dinâmica
app.get("/tchau/:pessoa", function(req, res){
    var pessoa = req.params.pessoa;
    res.render("despedida.ejs", {pessoaVar: pessoa})
});


// "/cachorro" => "MEOW!!"
app.get("/cachorro", function(req, res){
    res.send("MEOW!!")
});

// Padrões de caminhos - Segue um padrão de rota com variáveis
app.get("/r/:subredditNome", function(req, res){
    console.log(req.params);
    var subreddit = req.params.subredditNome;
    res.send("Bem vindo ao subreddit do " + subreddit)
});

// Padrões de caminhos - Segue um padrão de rota com variáveis
app.get("/r/:subredditNome/comments/:id/:titulo", function(req, res){
    console.log(req.params);
    res.send("Bem vindo a página de comentários") 
});

// Mostra erro caso usuário não digite uma página existente
app.get("*", function(req, res){
    res.send("Página não encontrada!")
});

// Indica para o Express começar a escutar as requisições (Inicia servidor)
app.listen(3000, function(){
    console.log("Servidor iniciado.")
});