// BOTAO LOGIN
function voltar() {
     window.location.href = "telaPrincipal.html"
 } // volta para a tela inicial caso queira voltar (obviamente);
 
function entrar() {
     window.location.href = "telaPrincipal.html"
 } // apos o login volta para a tela inicial para 'continuar comprando';
 
function semCadastro() { 
    window.location.href = "cadastro.html"
 } // caso nao tenha cadastro, leva da Tela de Login para a Tela de Cadastro;

 
 // BOTAO LOGIN ADM!
 function voltarADM() {
     window.location.href = "telaPrincipal.html"
} // volta para a tela inicial caso nao trabalhe na empresa (ou caso so queira voltar);
 
function ContinuarADM(){
   window.location.href = "cadastroProdutos.html"
 } //vai da tela de Login ADM para a tela de estoque;


// BOTÃO DOS ÍCONES
function seguirADM(){
    window.location.href = "loginADM.html"
}

function seguirLogin(){
    window.location.href = "login.html"
}

//Produtos cadastrados para tela de login 
function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    for (let produto of produtos){
        const li = document.createElement('li');
        li.classList.add('produto-item');

        const img = document.createElement('img');
        img.src = produto.urlImage;
        img.alt = produto.nome;
        img.classList.add('produto-img');

        const nome = document.createElement('p');
        nome.textContent = produto.nome; 

        const preco = document.createElement('p');
        preco.innerHTML = `<span> Preço: </span> R$${produto.preco}`;

        const descricao = document.createElement('p');
        descricao.innerHTML = `<span>Descrição:</span> ${produto.descricao}`; 

        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(preco);
        li.appendChild(descricao);

        listaProdutos.appendChild(li);

    }

}

window.onload = exibirProduto;