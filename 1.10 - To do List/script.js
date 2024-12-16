const input = document.getElementById('msginput');
const botao = document.getElementById('botaoadc');
const lista = document.getElementById('listamsg');

function carregarMensagens() {
    const mensagensSalvas = JSON.parse(localStorage.getItem('mensagens')) || []; 
    mensagensSalvas.forEach(mensagem => {
        const novoItem = document.createElement('li');
        novoItem.textContent = mensagem;
        lista.appendChild(novoItem);
    });
}


function salvarMensagens() {
    const itensLista = Array.from(lista.children); 
    const mensagens = itensLista.map(item => item.textContent); 
    localStorage.setItem('mensagens', JSON.stringify(mensagens)); 
}


carregarMensagens();

botao.addEventListener('click', function (){
    const mensagem = input.value;
    if(mensagem.trim() !==""){
        const novoItem = document.createElement('li');
        novoItem.textContent = mensagem;
        lista.appendChild(novoItem);
        input.value = ''
        salvarMensagens();
    } else{
        alert('Digite o que deve ser feito!');
    }
})
