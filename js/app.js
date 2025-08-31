let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value.trim();
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo);

    if (lista.textContent === "") {
        // se for o primeiro nome, adiciona sem virgula
        lista.textContent = amigo;
    } else {        
        lista.textContent += ", " + amigo;
    }
    document.getElementById('nome-amigo').value = "";
}