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

function sortear() {
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i  == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i+1] + '<br>';
        }
}
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-sorteio').innerHTML = "";
    document.getElementById('lista-amigos').innerHTML = "";
}