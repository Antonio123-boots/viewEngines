const formMensagem = document.getElementById('formMensagem');
formMensagem.addEventListener('submit', function(event) {
    event.preventDefault();
});

function enviarMensagem() {
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    window.confirm(`Deseja enviar a mensagem: "${mensagem}"?`) ? alert(`Mensagem enviada por ${nome}: "${mensagem}"`) : alert("Envio de mensagem cancelado.");
    console.log(`Usuário ${nome} tentou enviar a mensagem: "${mensagem}"`); 
}

formMensagem.reset();