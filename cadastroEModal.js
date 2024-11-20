//  CONFIRMAR CADASTRO
// chamar id do html 
function Cadastro() {
    let email= document.getElementById('email').value;
    let senha= document.getElementById('senha').value;
    let termos= document.getElementById('termos');
    let bancodeDados=  JSON.parse(localStorage.getItem("cadastro")) || {}
   
    if(bancodeDados[email]){
       alert('Esse email já foi cadastrado!');
       return;
    }

    else if(email && senha && termos.checked){
        bancodeDados[email] = { email: email, senha: senha };
        localStorage.setItem('cadastro', JSON.stringify(bancodeDados))
        alert('Usuário cadastrado com sucesso!')
        window.location.href="login.html"
    }
    else{
        alert('Preencha todas as informações!')
    }
}

// MODAL CADASTRO
// Seleciona os elementos do DOM
let abrirmodal = document.getElementById("botaoabrir");
let fecharmodal = document.getElementById("botaofechar");
let modal = document.getElementById("modal");
let fundo = document.getElementById("fundo");

// Função para abrir o modal
abrirmodal.addEventListener("click", function() {
    modal.classList.remove("sumir"); 
    fundo.classList.remove("sumir");  
});

// Função para fechar o modal
fecharmodal.addEventListener("click", function() {
    modal.classList.add("sumir");  
    fundo.classList.add("sumir");  
});

// Fechar o modal ao clicar fora dele
fundo.addEventListener("click", function(e) {
    if (e.target === fundo) {
        modal.classList.add("sumir"); 
        fundo.classList.add("sumir"); 
    }
});

function voltarC(){
    window.location.href = "telaPrincipal.html"
}