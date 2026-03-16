function proximaPagina() {
    window.location.href = "/apan";
    alert("Bem-vindo à página principal da Apan!");
    console.log("Usuário navegou para a página principal da Apan.");
}

function navega() {
    window.location.href = "/"; 

if(window.confirm("Quer mesmo?") === true) {
    window.location.href = "/";
}else {
    alert("Você permaneceu na página atual.");
    console.log("Usuário optou por permanecer na página atual.");}
}

const form = document.getElementById('formCadastro');
form.addEventListener('submit', function(event) {
    event.preventDefault();});

function cadastrarUsuario(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    alert(`Usuário ${nome} cadastrado com sucesso!`);
}

form.reset();


