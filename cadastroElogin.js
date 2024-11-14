//  CONFIRMAR CADASTRO
// chamar id do html 
function Cadastro() {
    let email= document.getElementById('email').value;
    let senha= document.getElementById('senha').value;
    let termos= document.getElementById('termos').value;
    let BancodeDados=  JSON.parse(localStorage.getItem("cadatro")) || {}
   
    if(BancodeDados [email]){
       alert('Esse email já foi cadastrado!');
       return;
    }

    else if(email && senha && termos.checked){
        BancodeDados[email] = { email: email, senha: senha };
        localStorage.setItem('cadastro', JSON.stringify(BancodeDados))
        alert('Usuário cadastrado com sucesso!')
        window.location.href="login.html"
    }
    else{
        alert('Preencha todas as informações!')
    }
}

function login(){
    let emailLogin = document.getElementById(email).value;
    let senhaLogin = document.getElementById(senha).value;

    if(BancodeDados[emailLogin].email=== emailLogin && BancodeDados[senhaLogin].senha=== senhaLogin){
    alert('Login bem sucedido')
    window.location.href ="telaPrincipal.html"
    }else{
    alert('Usuário não encontrado')
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